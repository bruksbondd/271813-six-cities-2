import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from "./main-screen.jsx";

it(`render correctly card`, () => {
  const mainScreen = renderer
    .create(<MainScreen
      arrOffers={[
        {
          id: 1,
          title: `Beautiful & luxurious apartment at great location`,
          img: `img/apartment-01.jpg`,
          isPremium: true,
          cost: 200
        },
        {
          id: 2,
          title: `Wood and stone place`,
          img: `img/apartment-02.jpg`,
          isPremium: false,
          cost: 130
        },
        {
          id: 3,
          title: `Canal View Prinsengracht`,
          img: `img/apartment-03.jpg`,
          isPremium: false,
          cost: 150
        },
        {
          id: 4,
          title: `Nice, cozy, warm big bed apartment`,
          img: `img/room.jpg`,
          isPremium: true,
          cost: 210
        }
      ]}
    />)
    .toJSON();
  expect(mainScreen).toMatchSnapshot();
});
