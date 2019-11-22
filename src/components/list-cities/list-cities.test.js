import React from 'react';
import renderer from 'react-test-renderer';
import {ListCities} from './list-cities.jsx';
import {CITIES} from '../../mocks/offers.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../../reducer.js';

it(`render correctly list of city`, () => {
  const store = createStore(reducer);
  const list = renderer
    .create(
        <Provider store={store}>
          <ListCities
            arrOffers={[{
              id: 11,
              city: `Dusseldorf`,
              title: `Canal View Prinsengracht`,
              img: `img/apartment-03.jpg`,
              isPremium: false,
              cost: 150,
              coords: [52.3909553943508, 4.85309666406198]
            },
            {
              id: 12,
              city: `Dusseldorf`,
              title: `Beautiful & luxurious apartment at great location`,
              img: `img/apartment-01.jpg`,
              isPremium: true,
              cost: 200,
              coords: [52.369553943508, 4.85309666406198]
            }]}
            cities={CITIES}
            selectedCity={`Paris`}
            onClick={() => {}}
          />
        </Provider>
    )
    .toJSON();
  expect(list).toMatchSnapshot();
});
