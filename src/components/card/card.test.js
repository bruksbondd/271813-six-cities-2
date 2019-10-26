import React from 'react';
import renderer from 'react-test-renderer';
import Card from "./card.jsx";

it(`render correctly card`, () => {
  const card = renderer
    .create(<Card
      title={`Beautiful & luxurious apartment at great location`}
    />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
