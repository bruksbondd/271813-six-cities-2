const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const TYPE_SORTING = {
  popular: `Popular`,
  priceToTop: `Price: low to high`,
  priceToLow: `Price: high to low`,
  rating: `Top rated first`
};

const offers = [
  {
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
    id: 3,
    city: `Amsterdam`,
    title: `Canal View Prinsengracht`,
    img: `img/apartment-03.jpg`,
    isPremium: false,
    cost: 150,
    rating: 35,
    coords: [52.369553943508, 4.85309666406198]
  },
  {
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
    id: 6,
    city: `Cologne`,
    title: `Canal View Prinsengracht`,
    img: `img/apartment-03.jpg`,
    isPremium: false,
    cost: 150,
    rating: 97,
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 7,
    city: `Brussels`,
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/room.jpg`,
    isPremium: true,
    cost: 210,
    rating: 88,
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 8,
    city: `Brussels`,
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    isPremium: true,
    cost: 200,
    rating: 75,
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 9,
    city: `Hamburg`,
    title: `Wood and stone place`,
    img: `img/apartment-02.jpg`,
    isPremium: false,
    cost: 130,
    rating: 69,
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 10,
    city: `Hamburg`,
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/room.jpg`,
    isPremium: true,
    cost: 210,
    rating: 90,
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 11,
    city: `Dusseldorf`,
    title: `Canal View Prinsengracht`,
    img: `img/apartment-03.jpg`,
    isPremium: false,
    cost: 150,
    rating: 71,
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 12,
    city: `Dusseldorf`,
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    isPremium: true,
    cost: 200,
    rating: 84,
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
    id: 14,
    city: `Brussels`,
    title: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    isPremium: false,
    cost: 150,
    rating: 33,
    coords: [52.3909553943508, 4.929309666406198]
  },
];

export {offers, CITIES, TYPE_SORTING};
