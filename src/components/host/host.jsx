import React from "react";
import "./host.scss"; 

const Host = ({ name, picture }) => {
  return (
    <div className="host-container">
      <p className="host-name">{name}</p>
      <img className="host-picture" src={picture} alt={name} />
    </div>
  );
};
export default Host;