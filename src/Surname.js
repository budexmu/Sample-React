import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { surname: '' };


  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Surname:
          <input type="text" value={this.state.surname}
            onChange={e => this.setState({ surname: e.target.value })}
            placeholder="Surname" />
        </label>

      </form>
    );
  }
}
export default App;




