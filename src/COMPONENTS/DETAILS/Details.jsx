import React from "react";

const Details = (props) => {
  const { name, population, special_location, description } = props.cities;
  return (
    <div className="border  bg-slate-300 text-center md:flex md:flex-col">
      <h1>
        <span className="text-5xl text-green-950">{name}</span>
        <span className="text-2xl text-red-600">/{population}million</span>
      </h1>
      <h1 className="text-3xl my-2 text-cyan-950">
        Tourist Places: {special_location}
      </h1>
      <p className="text-xl font-thin px-4">{description}</p>
      <button className="w-full  bg-green-900 mt-4 py-2 md:mt-auto text-white">
        Tour Now
      </button>
    </div>
  );
};

export default Details;
