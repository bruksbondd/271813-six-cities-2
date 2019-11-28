import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

class ListOffers extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {arrOffers, handlerMouseEnter, handlerMouseLeave} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {arrOffers.map((item, key) => (
        <Card
          key={key}
          id={item.id}
          title={item.title}
          img={item.img}
          cost={item.cost}
          isPremium={item.isPremium}
          rating={item.rating}
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        />))}
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerMouseEnter: (id) => dispatch(ActionCreator.changeIdSelectedCard(id)),
    handlerMouseLeave: () => dispatch(ActionCreator.resetId())
  };
};

ListOffers.propTypes = {
  arrOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerMouseEnter: PropTypes.func,
  handlerMouseLeave: PropTypes.func
};

const connectedComponent = connect(null, mapDispatchToProps)(ListOffers);
export {connectedComponent as ListOffers};
