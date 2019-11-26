import {offers, CITIES, TYPE_SORTING} from './mocks/offers';

const initialState = {
  city: CITIES[0],
  shownOffers: offers.filter((item) => item.city === CITIES[0]),
  allOffers: offers,
  isShownSort: false,
  typeSorting: TYPE_SORTING.popular,
  idSelectedCard: -1
};

const sortByPriceToLow = (array) => {
  return array.slice().sort((item1, item2) => item2.cost - item1.cost);
};
const sortByPriceToTop = (array) => {
  return array.slice().sort((item1, item2) => item1.cost - item2.cost);
};
const sortByRating = (array) => {
  return array.slice().sort((item1, item2) => item2.rating - item1.rating);
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CITY_CHANGE`,
    city
  }),
  getOffers: (city) => ({
    type: `GET_OFFERS`,
    city
  }),
  changeVisibleSort: () => ({
    type: `CHANGE_VISIBLE_SORTING`
  }),
  hideSort: () => ({
    type: `HIDE_SORT`
  }),
  sortByPriceToLow: () => ({
    type: `SORT_BY_PRICE_TO_LOW`
  }),
  sortByPriceToTop: () => ({
    type: `SORT_BY_PRICE_TO_TOP`
  }),
  sortByRating: () => ({
    type: `SORT_BY_RATE`
  }),
  changeIdSelectedCard: (id) => ({
    type: `CHANGE_ID`,
    id
  }),
  resetId: () => ({
    type: `RESET_ID`
  })
};

const reducer = (state = initialState, action) => {
  if (action.type === `CITY_CHANGE`) {
    return Object.assign({}, state, {
      city: action.city
    });
  } else if (action.type === `GET_OFFERS`) {
    return Object.assign({}, state, {
      shownOffers: state.allOffers.filter((item) => item.city === action.city),
      typeSorting: TYPE_SORTING.popular
    });
  } else if (action.type === `CHANGE_VISIBLE_SORTING`) {
    return Object.assign({}, state, {
      isShownSort: !state.isShownSort
    });
  } else if (action.type === `HIDE_SORT`) {
    return Object.assign({}, state, {
      isShownSort: false
    });
  } else if (action.type === `SORT_BY_PRICE_TO_LOW`) {
    return Object.assign({}, state, {
      shownOffers: sortByPriceToLow(state.shownOffers),
      typeSorting: TYPE_SORTING.priceToLow
    });
  } else if (action.type === `SORT_BY_PRICE_TO_TOP`) {
    return Object.assign({}, state, {
      shownOffers: sortByPriceToTop(state.shownOffers),
      typeSorting: TYPE_SORTING.priceToTop
    });
  } else if (action.type === `SORT_BY_RATE`) {
    return Object.assign({}, state, {
      shownOffers: sortByRating(state.shownOffers),
      typeSorting: TYPE_SORTING.rating
    });
  } else if (action.type === `CHANGE_ID`) {
    return Object.assign({}, state, {
      idSelectedCard: action.id
    });
  } else if (action.type === `RESET_ID`) {
    return Object.assign({}, state, {
      idSelectedCard: -1
    });
  }
  return state;
};

export {reducer, ActionCreator};
