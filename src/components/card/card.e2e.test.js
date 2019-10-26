import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`check the onClick callback`, () => {
  const clickHandler = jest.fn();
  const card = shallow(<Card
    title={`Beautiful & luxurious apartment at great location`}
    onClick={clickHandler}
  />);
  const titleLink = card.find(`.place-card__name a`);
  titleLink.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
