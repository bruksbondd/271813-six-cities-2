import React from 'react';
import renderer from 'react-test-renderer';
import City from './city.jsx';

it(`render correctly city`, () => {
  const city = renderer
    .create(<City
      name={`Amsterdam`}
      selectedCity={`Amsterdam`}
      onClick={() => {}}
    />)
    .toJSON();
  expect(city).toMatchSnapshot();
});
