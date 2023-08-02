import react, { FC } from 'react';
import Button from '../../../../Button';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useStyles } from './TablePagingStyles';

export type TablePagingProps = {
  currentPage: number;
  pagesCount: number;
  pageSize: number;
  setPaging?: (currentPage: number) => void;
};

const TablePaging: FC<TablePagingProps> = ({ pageSize, currentPage, pagesCount, setPaging }) => {
  const styles = useStyles();
  const isAtLowBorder = currentPage <= 0;
  const isAtHighBorder = currentPage >= pagesCount - 1;

  const PageLabel = ({ isActive, children }: { isActive: boolean } & React.PropsWithChildren) => {
    if (isActive) {
      return <b style={{ borderBottom: '2px solid black' }}>{children}</b>;
    }
    return <span style={{ borderBottom: '2px solid transparent' }}>{children}</span>;
  };
  return (
    <div className={styles.tablePaging}>
      <div>
        {!isAtLowBorder && (
          <Button onClick={() => setPaging?.(currentPage - 1)}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 18 }} />
          </Button>
        )}
        <ul className={styles.numberList}>
          {Array(pagesCount)
            .fill(0)
            .map((_, i) => (
              <li key={i}>
                <Button onClick={() => setPaging?.(i)}>
                  <PageLabel isActive={i === currentPage}>{i + 1}</PageLabel>
                </Button>
              </li>
            ))}
        </ul>
        {!isAtHighBorder && (
          <Button onClick={() => setPaging?.(currentPage + 1)}>
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: 18 }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TablePaging;
