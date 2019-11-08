import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {arrOffers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    arrOffers.forEach((it) => {
      leaflet
        .marker(it.coords, {icon})
        .addTo(map);
    });
  }

  render() {
    return <div style={{height: `948px`}} id="map"></div>;
  }
}

Map.propTypes = {
  arrOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Map;
