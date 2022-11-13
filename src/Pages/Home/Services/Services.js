import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const serviceData = [
      {
        id: 1,
        image: fluoride,
        name: "Fluoride Treatment",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        id: 2,
        image: cavity,
        name: "Cavity Filling",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        id: 3,
        image: whitening,
        name: "Teeth Whitening",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
    ];

    return (
      <div className="mt-16">
        <div className="text-center uppercase">
          <h3 className=" font-semibold text-lg text-primary ">Our Services</h3>
          <h1 className=" font-medium text-2xl">Services We Provide</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {serviceData.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;