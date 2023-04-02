import React, { useEffect, useState } from "react";
import Details from "../DETAILS/Details";

const City = () => {
  const [city, setCity] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCity(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-rows-2 gap-y-12 gap-x-2 my-8 px-2">
        {city.map((cities) => (
          <Details cities={cities}></Details>
        ))}
      </div>
    </div>
  );
};

export default City;
