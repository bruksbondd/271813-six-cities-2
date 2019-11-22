import {reducer} from './reducer.js';
import {offers, CITIES} from "./mocks/offers.js";

describe(`business logic is correct`, () => {
  it(`reducer without parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: CITIES[0],
      shownOffers: offers.filter((item) => item.city === CITIES[0]),
      allOffers: offers
    });
  });

  it(`reducer should return state with changed city`, () => {
    expect(reducer({
      city: `Cologne`,
      shownOffers: [{
        id: 4,
        city: `Cologne`,
        title: `Nice, cozy, warm big bed apartment`,
        img: `img/room.jpg`,
        isPremium: true,
        cost: 210,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 6,
        city: `Cologne`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150
      }],
      allOffers: offers
    }, {
      type: `CITY_CHANGE`,
      city: `Amsterdam`
    })).toEqual({
      city: `Amsterdam`,
      shownOffers: [{
        id: 4,
        city: `Cologne`,
        title: `Nice, cozy, warm big bed apartment`,
        img: `img/room.jpg`,
        isPremium: true,
        cost: 210,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 6,
        city: `Cologne`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150
      }],
      allOffers: offers
    });
  });

  it(`reducer should return state with changed offers`, () => {
    expect(reducer({
      city: `Cologne`,
      shownOffers: [{
        id: 4,
        city: `Cologne`,
        title: `Nice, cozy, warm big bed apartment`,
        img: `img/room.jpg`,
        isPremium: true,
        cost: 210,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 6,
        city: `Cologne`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150
      }],
      allOffers: offers
    }, {
      type: `GET_OFFERS`,
      city: `Amsterdam`
    })).toEqual({
      city: `Cologne`,
      shownOffers: [{
        id: 1,
        city: `Amsterdam`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 3,
        city: `Amsterdam`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        coords: [52.369553943508, 4.85309666406198]
      }],
      allOffers: offers
    });
  });
});
