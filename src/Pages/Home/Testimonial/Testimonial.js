import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, description, img } = testimonial;

  return (
    <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800 shadow-lg border border-gray-200">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={img}
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <span className="text-xs text-gray-600">2 days ago</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-600">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Testimonial;
