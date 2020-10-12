import React from 'react';
import './style.css';

const connect = true
const point = document.querySelector(".status-online");

function Contact() {
  return (
    <div className="Contact">
        <div className="Nom">
            <img className="avatar" href="https://randomuser.me/api/portraits/women/2.jpg" />
            <h1 className="name">Willie Ellis</h1>
        </div>
        <div className="status">
            <div className="status-online"></div>
            <p className="status-text"> {connect ? 'Online' : 'Offline'} </p>
        </div>
    </div>
  );
}

export default Contact;