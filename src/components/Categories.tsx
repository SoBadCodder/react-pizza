import React from 'react';

import { setCategoryId } from '../redux/Slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => dispatch(setCategoryId(i))}
            className={categoryId === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default Categories;
