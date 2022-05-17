import React, { Component } from "react";
import "./styles.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    // I want to pass the submitted value to the App Component
    this.handleSubmit = this.props.handleSubmit.bind(this, this.state.value);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="popup">
          <div className="popup_inner">
            <div> Create New Entry </div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  name="name"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Popup;