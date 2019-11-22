import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {offers, CITIES} from './mocks/offers.js';
import {reducer} from './reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);
const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          arrOffers={offers}
          cities={CITIES}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();

export {store};
