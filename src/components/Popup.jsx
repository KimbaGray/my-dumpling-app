import React, { Component } from "react";
import "./popup.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <div>
            <iframe
              src={this.props.iframeUrl}
              width="750"
              height="500"
            ></iframe>
            <div>
              <button onClick={this.props.closePopup}>close me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
