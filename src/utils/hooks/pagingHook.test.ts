import { act, renderHook } from '@testing-library/react';
import usePaging from './pagingHook';

test('usePaging', async () => {
  const pageSize = 2;
  const initialData = ['item1', 'item2', 'item3', 'item4', 'item5'];

  const { result } = renderHook(() =>
    usePaging({
      data: initialData,
      pageSize: pageSize,
    })
  );

  expect(result.current.data).toEqual(['item1', 'item2']);
  expect(result.current.currentPageNumer).toEqual(0);

  act(() => {
    result.current.setCurrentPageNumer?.(1);
  });

  expect(result.current.data).toEqual(['item3', 'item4']);
  expect(result.current.currentPageNumer).toEqual(1);

  act(() => {
    result.current.setCurrentPageNumer?.(2);
  });

  expect(result.current.data).toEqual(['item5']);
  expect(result.current.currentPageNumer).toEqual(2);
});
