import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortType from './sort-type.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`check the mouse click on the changing sorting`, () => {
  const handlerClick = jest.fn();
  const switcher = shallow(<SortType
    handlerSortButton={handlerClick}
    typeSorting={`Popular`}
  />);
  switcher.simulate(`click`);
  expect(handlerClick).toHaveBeenCalled();
});
