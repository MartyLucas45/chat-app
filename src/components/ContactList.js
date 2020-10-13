import React from "react";

const { default: Contact } = require("./contact");

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];


  function ContactList() {
    return (
        users.map( element => 
            <div className="Contact">
                <img className="avatar" src={element.avatar} alt={element.name} />
                <div>
                <p className="name">{element.name}</p>
                <div className="status">
                    <div className={element.online ? "status-online" : "status-offline"} />
                    <p className="status-text">{element.online}</p>
                </div>
                </div>
            </div>
      )
    );
  }

  export default ContactList;