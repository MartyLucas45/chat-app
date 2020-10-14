import React from "react";

class Contact extends React.Component {
  render(){
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.img} alt={this.props.imgAlt} />
        <div>
          <p className="name">{this.props.imgAlt}</p>
          <div className="status">
            <div className={this.props.statut} />
            <p className="status-text">{this.props.statutText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
