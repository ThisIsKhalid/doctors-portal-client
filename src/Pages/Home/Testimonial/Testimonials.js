import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "khalid",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Anu",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 3,
      name: "Hiya",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];

  return (
    <div className="container mx-auto mt-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-bold text-primary">Testimonial</h4>
          <h1 className="text-2xl font-medium">What Our Patients Says</h1>
        </div>
        <img className="w-1/12" src={quote} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-7">
        {testimonialData.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
