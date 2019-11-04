import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`check the mouse hover`, () => {
  const handlerMouseEnter = jest.fn();
  const card = shallow(<Card
    title={`Wood and stone place`}
    id={100}
    img={`img/apartment-01.jpg`}
    isPremium={true}
    cost={1000}
    onMouseEnter={handlerMouseEnter}
  />);
  const article = card.find(`.place-card`);
  article.simulate(`mouseenter`);
  expect(handlerMouseEnter).toHaveBeenCalledWith(100);
});
