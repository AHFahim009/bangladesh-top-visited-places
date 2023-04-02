import React from "react";

const Link = ({ links }) => {
  return (
    <div className="">
      <li className="text-xl md:text-2xl mr-2 px-3 py-2  hover:bg-red-700 ">
        <a href={links.path}>{links.name}</a>
      </li>
    </div>
  );
};

export default Link;
