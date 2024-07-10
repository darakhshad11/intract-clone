import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className="card-header" style={{ backgroundColor: data.backgroundColor }}>
        <img src={data.image} alt={data.name} className="card-image" />
        <div className="card-bookmark">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path fill="#FFF" d="M6 4h12v15.586l-6-3.6-6 3.6z" />
          </svg>
        </div>
      </div>
      <div className='name'>{data.name}</div>
      <div className='heading'>{data.heading}</div>
      <div className='card-button'>
        <button className='card-buttons'>{data.firstbutton}</button>
        <button className='card-buttons'>{data.secondbutton}</button>
        <button className='card-buttons'>{data.thirdbutton}</button>
      </div>
    </div>
  );
};

export default Card;
