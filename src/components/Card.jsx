import React from "react";
import Avatar from "./Avatar";
import Content from "./Content.jsx";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id} </p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Content contentInfo={props.tel} />
        <Content contentInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
