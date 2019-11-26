import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, img, isPremium, cost, onMouseEnter, rating, onMouseLeave, id}) => {
  return <article onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave} className="cities__place-card place-card">
    {isPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : null}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={img} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{cost}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">Apartment</p>
    </div>
  </article>;
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isPremium: PropTypes.bool,
  cost: PropTypes.number,
  rating: PropTypes.number
};

export default Card;
