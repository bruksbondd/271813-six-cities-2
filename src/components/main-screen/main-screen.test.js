import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from "./main-screen.jsx";
import {CITIES, offers} from '../../mocks/offers.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer.js';

it(`render correctly card`, () => {
  const store = createStore(reducer);
  const mainScreen = renderer
    .create(
        <Provider store={store}>
          <MainScreen
            arrOffers={offers}
            cities={CITIES}
          />
        </Provider>)
    .toJSON();
  expect(mainScreen).toMatchSnapshot();
});
