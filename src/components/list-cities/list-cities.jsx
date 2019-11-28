import React from 'react';
import PropTypes from 'prop-types';
import {ListOffers} from '../list-offers/list-offers.jsx';
import {Map} from '../map/map.jsx';
import City from '../city/city.jsx';
import {Sort} from '../sort/sort.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

class ListCities extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {shownOffers, cities, selectedCity, changeCity} = this.props;
    return <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((item, key) => (
              <City
                key={key}
                name={item}
                selectedCity={selectedCity}
                onClick={() => changeCity(item)}
              />
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{shownOffers.length} places to stay in {selectedCity}</b>
            <Sort/>
            <ListOffers
              arrOffers={shownOffers}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                arrOffers={shownOffers}
                key={selectedCity}
              />
            </section>
          </div>
        </div>
      </div>
    </main>;
  }
}

const mapStateToProps = (state) => {
  const {city: selectedCity, shownOffers} = state;
  return {selectedCity, shownOffers};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (city) => {
      dispatch(ActionCreator.changeCity(city));
      dispatch(ActionCreator.getOffers(city));
      dispatch(ActionCreator.hideSort());
    }
  };
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ListCities);

ListCities.propTypes = {
  shownOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func
};

export {connectedComponent as ListCities};
