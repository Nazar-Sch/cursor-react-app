import React from 'react';
import Balance from '../../components/Balance';
import BtnAddMore from '../../components/BtnAddMore';
import TableCategories from '../../components/TableCategories';

const Categories = () => (
  <div>
    <Balance total={265279.07} />
    <BtnAddMore />
    <TableCategories />
  </div>
);

export default Categories;
