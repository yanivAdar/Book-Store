import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    names: [
        { name: 'Alex' },
        { name: 'Dana' },
        { name: 'Yaniv' }
    ]
  }

  AddLastNameHandler = (event) => {
    console.log(event)
    
    this.setState({
      names: [
        { name: event.target.value },
        { name: 'Dana' },
        { name: 'Yaniv' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.names[0].name} changed={this.AddLastNameHandler} />
        <UserOutput name={this.state.names[0].name} />
        <UserOutput name={this.state.names[1].name} />
        <UserOutput name={this.state.names[2].name} />
      </div>
    );
  }
}

export default App;
