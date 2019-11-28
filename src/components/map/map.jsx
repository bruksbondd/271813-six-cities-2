import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {addMarkersToMap} from "../../utils/utils.js";
import leaflet from "leaflet";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = [52.38333, 4.9];
    this._zoom = 12;
    this._map = null;
  }
  componentDidMount() {
    const {arrOffers, idSelectedCard} = this.props;
    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
    this._map.setView(this._city, this._zoom);
    this.addMarkersToMap(this._map, arrOffers, idSelectedCard);
  }
  componentDidUpdate(prevProps) {
    const {idSelectedCard, arrOffers} = this.props;
    if (prevProps.idSelectedCard !== idSelectedCard) {
      this.addMarkersToMap(this._map, arrOffers, idSelectedCard);
    }
  }
  addMarkersToMap(map, arrayOffers, idSelectedCard) {
    arrayOffers.forEach((it) => {
      const icon = leaflet.icon({
        iconUrl: (it.id === idSelectedCard) ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [27, 39]
      });
      leaflet
        .marker(it.coords, {icon})
        .addTo(map);
    });
  }
  render() {
    const {key} = this.props;
    return <div key={key} style={{height: `948px`}} id="map"></div>;
  }
}

const mapStateToProps = (state) => {
  const {idSelectedCard} = state;
  return {idSelectedCard};
};

const connectedComponent = connect(mapStateToProps, null)(Map);

Map.propTypes = {
  arrOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  idSelectedCard: PropTypes.number,
  key: PropTypes.string
};

export {connectedComponent as Map};
