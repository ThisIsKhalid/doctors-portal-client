import React from "react";
import PrimaryButton from "../../../components/PrimaryButton";

const AppointmentOption = ({ option }) => {
  const {name, slots} = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-secondary">{name}</h2>
        <p>{ slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
        <div className="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;