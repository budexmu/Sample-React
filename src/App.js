
import React, { Component } from 'react';
import Title from './Title';
import Name from './Name';
import Surname from './Surname';
import Submit from './Submit';
import './App.css';
import Table from './Table';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' };

}

handleChange = () =>  {
  this.setState({
    name:this.state.name
  });
}

render() {
  return (
    <div className="App">
      <Title />
      <Name value={this.state.name} handleSubmit={this.handleChange} />
      <br />
      <Surname />
      <br />
      <Submit handleChange={this.handleChange} />
      <p>
        {JSON.stringify(this.state.fields, null, 2)}
      </p>
      <Table />
    </div>
  );
}
}

export default App;
