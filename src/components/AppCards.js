import React from "react";

const AppCards = props => {
  return (
    <div className="container border border-dark my-3">
      <img src={props.imgUrl} className="img-thumbnail" />
      <h3>{props.title}</h3>
      <p>{props.about}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default AppCards;
