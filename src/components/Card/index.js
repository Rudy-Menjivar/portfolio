import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export default function Card({ children, details, title }) {
  return(
    <div className="card">
      <div className="card-details">
        <h4>{title}</h4>
        {details}
      </div>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  details: null,
}