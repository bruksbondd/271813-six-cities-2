import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`render correctly App`, () => {
  const app = renderer
    .create(<App
      arrDescriptions={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`]}
    />)
    .toJSON();
  expect(app).toMatchSnapshot();
});
