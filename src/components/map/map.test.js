import React from 'react';
import renderer from 'react-test-renderer';
import Map from "./map.jsx";

it(`render correctly map`, () => {
  const map = renderer
    .create(<Map
      arrOffers={[
        {
          id: 1,
          title: `Beautiful & luxurious apartment at great location`,
          img: `img/apartment-01.jpg`,
          isPremium: true,
          cost: 200,
          coords: [52.3909553943508, 4.85309666406198]
        },
        {
          id: 2,
          title: `Wood and stone place`,
          img: `img/apartment-02.jpg`,
          isPremium: false,
          cost: 130,
          coords: [52.369553943508, 4.85309666406198]
        },
        {
          id: 3,
          title: `Canal View Prinsengracht`,
          img: `img/apartment-03.jpg`,
          isPremium: false,
          cost: 150,
          coords: [52.3909553943508, 4.929309666406198]
        },
        {
          id: 4,
          title: `Nice, cozy, warm big bed apartment`,
          img: `img/room.jpg`,
          isPremium: true,
          cost: 210,
          coords: [52.3809553943508, 4.939309666406198]
        }
      ]}
    />)
    .toJSON();
  expect(map).toMatchSnapshot();
});
