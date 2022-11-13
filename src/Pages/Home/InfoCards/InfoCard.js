import React from 'react';

const InfoCard = ({ card }) => {
    const {name, icon, description , bgClass} = card;
  return (
    <div className={`card md:card-side shadow-xl text-white p-5 ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;