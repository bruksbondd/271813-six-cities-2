import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {CITIES, offers} from '../../mocks/offers.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer.js';

it(`render correctly App`, () => {
  const store = createStore(reducer);
  const app = renderer
    .create(
        <Provider store={store}>
          <App
            arrOffers={offers}
            cities={CITIES}
          />
        </Provider>)
    .toJSON();
  expect(app).toMatchSnapshot();
});
