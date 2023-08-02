import {  useEffect, useState } from 'react';
import { clamp } from '../mathUtil';

export type UsePagingProps<T> = {
	data: T[];
	pageSize: number;
};
export type UsePagingReturn<T> = {
	data: T[];
	currentPageNumer: number;
	pageCount: number;
	setCurrentPageNumer?(page: number): void;
};
 const usePaging =<T>({

	data,
	pageSize,
}: UsePagingProps<T>): UsePagingReturn<T> =>{
	const [pageSinglePageData, setSinglePageData] = useState<T[]>([]);
	const [pages, setPages] = useState<T[][]>();
	const [pageNumber, setPageNumber] = useState<number>(0);
	const pageCount = Math.round(data.length / pageSize) + 1;

	const calculateAndUpdateData = () => {
		const pagesArr: T[][] = [];
		let subArray: T[] = [];
		for (let i = 0; i < data.length; i++) {
			subArray.push(data[i]);
			if (subArray.length >= pageSize) {
				pagesArr.push([...subArray]);
				subArray = [];
			}
			if (i + 1 === data.length) {
				pagesArr.push([...subArray]);
			}
		}

		setPages(() => pagesArr);
	};

	useEffect(() => {
		calculateAndUpdateData();
	}, [pageSize]);

	useEffect(() => {
		if (pages) {
			setSinglePageData(pages[pageNumber]);
		}
	}, [pages, pageNumber]);

	const onSetPage = (page: number) => {
		let pageDraft = clamp(page, 0, pageCount - 1);
		setPageNumber(pageDraft);
	};

	return {
		data: pageSinglePageData,
		currentPageNumer: pageNumber,
		setCurrentPageNumer: onSetPage,
		pageCount,
	};
}

export default usePaging