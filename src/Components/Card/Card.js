import React from 'react';
import { Link } from 'react-router-dom';
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
       <h4>Price:{cost}</h4>
       <div className=" justify-content-center">
            <Link to="/services">
             <button>Checkout</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Card;