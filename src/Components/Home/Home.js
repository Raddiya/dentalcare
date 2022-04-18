import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
         <div className="banner">
           <span className='intro' >
             <h3>Your smile is our passion.</h3>
           <p></p>
           
           </span>
           
        <p> </p>
      </div>
      {
        <div className="container mb-5">
          <h1 className="text-center text-secondary fw-bold mt-5">
            WHAT WE CAN OFFER
            <span className="d-block services">OUR SERVICES</span>
          </h1>
          <div className="card-compo">
            {services.map(
              (item, index) =>
                index < 3 && <Card key={index} product={item}></Card>
            )}
          </div>
          <div className=" d-flex justify-content-center">
            <Link className="services-container allButton" to="/services">
              See more
            </Link>
          </div>
        </div>
      }
        </div>
    );
};

export default Home;