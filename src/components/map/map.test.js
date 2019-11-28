import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from "./map.jsx";
import {offers} from "../../mocks/offers.js";
import {createStore} from "redux";
import {reducer} from "../../reducer";
import {Provider} from 'react-redux';

it(`render correctly map`, () => {
  const store = createStore(reducer);
  const map = renderer
    .create(<Provider store={store}>
      <Map
        arrOffers={offers}
        key={`Amsterdam`}
      />
    </Provider>)
    .toJSON();
  expect(map).toMatchSnapshot();
});
