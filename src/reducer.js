import {offers, CITIES} from './mocks/offers';

const initialState = {
  city: CITIES[0],
  shownOffers: offers.filter((item) => item.city === CITIES[0]),
  allOffers: offers
};

const reducer = (state = initialState, action) => {
  if (action.type === `CITY_CHANGE`) {
    return Object.assign({}, state, {
      city: action.city
    });
  } else if (action.type === `GET_OFFERS`) {
    return Object.assign({}, state, {
      shownOffers: state.allOffers.filter((item) => item.city === action.city)
    });
  }
  return state;
};

export default reducer;
