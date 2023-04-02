import React from "react";

const Details = (props) => {
  const { name, population, special_location, description } = props.cities;
  return (
    <div className="border px-3 bg-slate-300 text-center ">
      <h1>
        <span className="text-5xl text-green-950">{name}</span>
        <span className="text-2xl text-red-600">/{population}million</span>
      </h1>
      <h1 className="text-3xl my-3 text-cyan-950">
        Tourist Places: {special_location}
      </h1>
      <p className="text-xl font-thin">{description}</p>
    </div>
  );
};

export default Details;
