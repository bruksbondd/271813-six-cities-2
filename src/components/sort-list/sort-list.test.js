import React from 'react';
import renderer from 'react-test-renderer';
import SortList from "./sort-list.jsx";

it(`render correctly sort list`, () => {
  const sortList = renderer
    .create(<SortList
      active={true}
      handlerSortByPriceToLow={() => {}}
      handlerSortByPriceToTop={() => {}}
      handlerSortByPopular={() => {}}
      handlerSortByRating={() => {}}
      typeSorting={`Popular`}
    />)
    .toJSON();
  expect(sortList).toMatchSnapshot();
});
