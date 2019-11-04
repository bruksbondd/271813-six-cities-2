import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

class ListOffers extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
  }
  handlerMouseEnter(id) {
    this.setState({
      id
    });
  }
  handlerMouseLeave() {
    this.setState({
      id: -1
    });
  }
  render() {
    const {arrOffers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {arrOffers.map((item, key) => (
        <Card
          key={key}
          id={item.id}
          title={item.title}
          img={item.img}
          cost={item.cost}
          isPremium={item.isPremium}
          onMouseEnter={this.handlerMouseEnter}
          onMouseLeave={this.handlerMouseLeave}
        />))}
    </div>;
  }
}

ListOffers.propTypes = {
  arrOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListOffers;
