import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from "./main-screen.jsx";

it(`render correctly card`, () => {
  const mainScreen = renderer
    .create(<MainScreen
      arrDescriptions={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`]}
    />)
    .toJSON();
  expect(mainScreen).toMatchSnapshot();
});
