import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, about, picture, cost} = props.product;
  return (
    <div className="p-4 user-card mb-4">
      <div className="text-center">
        <img className="user-img mb-4" src={picture} alt="" />
      </div>
      <div className="text-center">
        <h4>Name: {name}</h4>
        <p>{about}</p>
        <p>Price:{cost}</p>
      </div>
    </div>
  );
};

export default Card;