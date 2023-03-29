import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;
      
    case "cross":
      return <FaTimes className="icon" />;
      
    default:
      return <FaPen className="icon" />;
  }

  // return (
  //   <h1>
  //     <FaTimes className="icon" />
  //     <FaPen  className="icon" />
  //     <FaRegCircle className="icon" />
  //   </h1>
  // );
};

export default Icon;
