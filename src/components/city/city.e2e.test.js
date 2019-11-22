import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import City from './city.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`check the mouse click on the city`, () => {
  const handlerClick = jest.fn();
  const city = shallow(<City
    name={`Amsterdam`}
    selectedCity={`Paris`}
    onClick={handlerClick}
  />);
  city.simulate(`click`);
  expect(handlerClick).toHaveBeenCalled();
});
