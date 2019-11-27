import {reducer} from './reducer.js';
import {offers, CITIES, TYPE_SORTING} from "./mocks/offers.js";

describe(`business logic is correct`, () => {
  it(`reducer without parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: CITIES[0],
      shownOffers: offers.filter((item) => item.city === CITIES[0]),
      allOffers: offers,
      isShownSort: false,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
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
        rating: 54,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 6,
        city: `Cologne`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 97,
        coords: [52.369553943508, 4.85309666406198]
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
        rating: 63,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 3,
        city: `Amsterdam`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 35,
        coords: [52.369553943508, 4.85309666406198]
      }],
      allOffers: offers,
      typeSorting: TYPE_SORTING.popular
    });
  });
  it(`reducer should return state with shown form sorting`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: offers.filter((item) => item.city === CITIES[0]),
      allOffers: offers,
      isShownSort: false,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `CHANGE_VISIBLE_SORTING`
    })).toEqual({
      city: CITIES[0],
      shownOffers: offers.filter((item) => item.city === CITIES[0]),
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    });
  });
  it(`reducer should return state with hidden form sorting`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: offers.filter((item) => item.city === CITIES[0]),
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `CHANGE_VISIBLE_SORTING`
    })).toEqual({
      city: CITIES[0],
      shownOffers: offers.filter((item) => item.city === CITIES[0]),
      allOffers: offers,
      isShownSort: false,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    });
  });
  it(`reducer should return state with sorted list by price to low`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `SORT_BY_PRICE_TO_LOW`
    })).toEqual({
      city: CITIES[0],
      shownOffers: [{
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      },
      {
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.priceToLow,
      idSelectedCard: -1
    });
  });
  it(`reducer should return state with sorted list by price to top`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `SORT_BY_PRICE_TO_TOP`
    })).toEqual({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      },
      {
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.priceToTop,
      idSelectedCard: -1
    });
  });
  it(`reducer should return state with sorted list by popular`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      },
      {
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `SORT_BY_POPULAR`
    })).toEqual({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    });
  });
  it(`reducer should return state with sorted list by rate`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      },
      {
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `SORT_BY_RATE`
    })).toEqual({
      city: CITIES[0],
      shownOffers: [{
        id: 5,
        city: `Paris`,
        title: `Beautiful & luxurious apartment at great location`,
        img: `img/apartment-01.jpg`,
        isPremium: true,
        cost: 200,
        rating: 100,
        coords: [52.369553943508, 4.85309666406198]
      },
      {
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      },
      {
        id: 13,
        city: `Paris`,
        title: `Canal View Prinsengracht`,
        img: `img/apartment-03.jpg`,
        isPremium: false,
        cost: 150,
        rating: 55,
        coords: [52.3909553943508, 4.929309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.rating,
      idSelectedCard: -1
    });
  });
  it(`reducer should return state with changed id`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    }, {
      type: `CHANGE_ID`,
      id: 5
    })).toEqual({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: 5
    });
  });
  it(`reducer should return state with reset id`, () => {
    expect(reducer({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: 5
    }, {
      type: `RESET_ID`
    })).toEqual({
      city: CITIES[0],
      shownOffers: [{
        id: 2,
        city: `Paris`,
        title: `Wood and stone place`,
        img: `img/apartment-02.jpg`,
        isPremium: false,
        cost: 130,
        rating: 78,
        coords: [52.3909553943508, 4.85309666406198]
      }],
      allOffers: offers,
      isShownSort: true,
      typeSorting: TYPE_SORTING.popular,
      idSelectedCard: -1
    });
  });
});
