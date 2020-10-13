import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.img} alt={props.imgAlt} />
      <div>
        <p className="name">{props.imgAlt}</p>
        <div className="status">
          <div className={props.statut} />
          <p className="status-text">{props.statutText}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
