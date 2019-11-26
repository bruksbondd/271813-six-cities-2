import React from 'react';
import renderer from 'react-test-renderer';
import {Sort} from "./sort.jsx";
import {createStore} from "redux";
import {reducer} from "../../reducer";
import {Provider} from 'react-redux';

it(`render correctly sort section`, () => {
  const store = createStore(reducer);
  const sorting = renderer
    .create(<Provider store={store}>
      <Sort
        sortButton={() => {}}
        sortByPriceToLow={() => {}}
        sortByPriceToTop={() => {}}
        sortByPopular={() => {}}
        sortByRating={() => {}}
        isShownSort={true}
        typeSorting={`Popular`}
      />
    </Provider>)
    .toJSON();
  expect(sorting).toMatchSnapshot();
});
