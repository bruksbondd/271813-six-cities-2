import React from 'react';
import renderer from 'react-test-renderer';
import SortType from "./sort-type.jsx";

it(`render correctly sort type`, () => {
  const sortType = renderer
    .create(<SortType
      handlerSortButton={() => {}}
      typeSorting={`Popular`}
    />)
    .toJSON();
  expect(sortType).toMatchSnapshot();
});
