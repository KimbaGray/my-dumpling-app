import React, { Component } from "react";
import Popup from "./Popup";
import "./popup.css";
import "./recipe.css";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="recipeName">{this.props.name}</div>
        <div className="imageBox">
          <img src={this.props.image} alt="dumpling" className="image"></img>
        </div>
        <div>
          <button onClick={this.togglePopup.bind(this)}>
            {" "}
            I want to make these dumplings
          </button>
          {this.state.showPopup ? (
            <Popup
              iframeUrl={this.props.iframeUrl}
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Recipe;
