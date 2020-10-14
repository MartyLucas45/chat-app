import { render } from "@testing-library/react";
import React from "react";
import "./style.css";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true
  }
];

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  }
  render(){
    return users.map((element) => (
      <div className="Contact">
        <img className="avatar" src={element.avatar} alt={element.name} />
        <div>
          <p className="name">{element.name}</p>
          <div className="status" 
            onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline});
              }
            }
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
          </div>
        </div>
      </div>
    ));
}
}


export default ContactList;
