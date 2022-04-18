import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const Services = () =>{
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    
    return (
      <div className="card-compo">
      {services.map(
        (item, index) =>
           <Card key={index} product={item}></Card>
      )}
    </div>
    );
  };

export default Services;