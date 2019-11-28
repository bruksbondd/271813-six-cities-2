import React from 'react';
import renderer from 'react-test-renderer';
import Card from "./card.jsx";

it(`render correctly card`, () => {
  const card = renderer
    .create(<Card
      title={`some apartment`}
      id={0}
      img={`img/apartment-01.jpg`}
      isPremium={true}
      cost={1000}
      rating={93}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
