import React, { Component } from 'react';
import Title from './Title';
import Name from './Name';
import Surname from './Surname';
import Submit from './Submit';
import './App.css';
import Table from './Table';
import Edit from './Edit';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', surname: '', data: [] };
  }

  appHhandleChange = (key, value) => {
    console.log("app handle ", key, value)
    this.setState({ [key]: value });
  }

  appSubmitButton = (e) => { 
    
    if (!this.state.name || !this.state.surname) {
     alert('boş olamaz')
      return;
    }
    console.log('app click');

    const item = {
      name: this.state.name,
      surname: this.state.surname,
      edit:this.state.edit,
    }
    const data = this.state.data.slice(0);
    data.push(item);
    this.setState({ data: data, name: '', surname: '',edit:'' });
  }

  render() {
    return (
      <div className="App">
        <span>Name: {this.state.name}</span>
        <br />
        <span>Surname: {this.state.surname}</span>
        <Title />
        <Name value={this.state.name} handleChange={this.appHhandleChange} />
        <br />
        <Surname value={this.state.surname} handleChange={this.appHhandleChange} />
        <br />
        <Submit handleChange={this.appSubmitButton} />
        <Table data={this.state.data} />
        
      </div>
    );
  }
}

export default App;
