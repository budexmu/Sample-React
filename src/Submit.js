import React, { Component } from 'react';
import Title from './Title';
import './App.css';
import Name from './Name'
import Surname from './'
class App extends Component {
  handleSubmit = (event) => {
    alert('A name was submitted: ');
    this.props.handleChange()
  }

  render() {
    return (
      <form>
        <input type="submit" value="Submit" onClick={e => this.handleSubmit(e)} />
      </form>

    );
  }
}
export default App;




