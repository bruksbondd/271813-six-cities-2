import leaflet from "leaflet";

const addMarkersToMap = (map, arrayOffers, idSelectedCard) => {
  arrayOffers.forEach((it) => {
    const icon = leaflet.icon({
      iconUrl: (it.id === idSelectedCard) ? `img/pin-active.svg` : `img/pin.svg`,
      iconSize: [27, 39]
    });
    leaflet
      .marker(it.coords, {icon})
      .addTo(map);
  });
};

export {addMarkersToMap};
