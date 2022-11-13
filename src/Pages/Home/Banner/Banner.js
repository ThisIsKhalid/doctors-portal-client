import React from "react";
import { Link } from "react-router-dom";
import chairImg from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-50 relative">
      <img
        className="object-cover absolute h-full w-full mix-blend-overlay"
        src={chairImg}
        alt=""
      />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img
              src={chairImg}
              alt=""
              className="sm:w-4/5 lg:w-full mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-700">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link>
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
