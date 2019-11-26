import React from 'react';
import renderer from 'react-test-renderer';
import {ListOffers} from "./list-offers.jsx";
import {createStore} from "redux";
import {reducer} from "../../reducer";
import {Provider} from 'react-redux';

it(`render correctly card`, () => {
  const store = createStore(reducer);
  const card = renderer
    .create(<Provider store={store}>
      <ListOffers
        arrOffers={[
          {
            id: 1,
            title: `Beautiful & luxurious apartment at great location`,
            img: `img/apartment-01.jpg`,
            isPremium: true,
            cost: 200,
            rating: 95
          },
          {
            id: 2,
            title: `Wood and stone place`,
            img: `img/apartment-02.jpg`,
            isPremium: false,
            cost: 130,
            rating: 95
          },
          {
            id: 3,
            title: `Canal View Prinsengracht`,
            img: `img/apartment-03.jpg`,
            isPremium: false,
            cost: 150,
            rating: 95
          },
          {
            id: 4,
            title: `Nice, cozy, warm big bed apartment`,
            img: `img/room.jpg`,
            isPremium: true,
            cost: 210,
            rating: 95
          }
        ]}
        handlerMouseEnter={() => {}}
        handlerMouseLeave={() => {}}
      />
    </Provider>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
