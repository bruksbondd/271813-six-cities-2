import React from 'react';
import PropTypes from 'prop-types';
import ListOffers from '../list-offers/list-offers.jsx';
import Map from '../map/map.jsx';
import City from '../city/city.jsx';
import {connect} from 'react-redux';

class ListCities extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {shownOffers, cities, selectedCity, onClick} = this.props;
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
                onClick={onClick}
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
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <ListOffers
              arrOffers={shownOffers}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                arrOffers={shownOffers}
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
    onClick: (evt) => {
      const selectedCity = evt.target.textContent;
      dispatch({type: `CITY_CHANGE`, city: selectedCity});
      dispatch({type: `GET_OFFERS`, city: selectedCity});
    }
  };
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ListCities);

ListCities.propTypes = {
  shownOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export {connectedComponent as ListCities};
