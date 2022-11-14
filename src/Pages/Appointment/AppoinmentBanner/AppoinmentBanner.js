import React from "react";
import { DayPicker } from "react-day-picker";
import chairBg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="my-6"
      style={{
        background: `url(${chairBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src={chair}
            alt="chair"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            {/* <p>You have selected date : {format(selectedDate, "PP")}</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
