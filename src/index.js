import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const arrDescriptions = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];
  ReactDOM.render(
      <App
        arrDescriptions={arrDescriptions}
      />,
      document.querySelector(`#root`)
  );
};

init();
