import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { setPageCount } from '../../redux/Slices/filterSlice';

import styles from './pagination.module.scss';

export const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter);

  return (
    <div className={styles.root}>
      <ReactPaginate
        className={styles.buttons}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setPageCount(event.selected + 1))}
        pageRangeDisplayed={4}
        forcePage={currentPage - 1}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
