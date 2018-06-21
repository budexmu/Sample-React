import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleSubmit = (event) => {
    if(this.props.handleChange) {
      this.props.handleChange(event.target.value)
    }
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.props.value}
            onChange={this.handleSubmit}
            placeholder="Name" />
        </label>

      </form>
    );
  }
}

export default App;




