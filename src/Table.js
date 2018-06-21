import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name:"", surname: '' };
  }
  render() {
    return (
      <ReactTable
      columns={[
        {
          Header:"Name"
        },
        {
          Header:"Surname"
        },
        {
          Header:"Edit"
         
          
        }

      ]}
      />
    );
  }
}
export default App;




