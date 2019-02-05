import React, { Component } from 'react';
import './App.css';
import ValidationComp from './ValidationComp/ValidationComp';
import CharComp from './CharComp/CharComp';

class App extends Component {
  state = { value: 'dfgdfgd' }

  onChangeHandler = event => {
    this.setState({ value: event.target.value })
  }

  clickHandler = index => {
    console.log(index);
    const chars = [...this.state.value];
    chars.splice(index, 1);
    this.setState({ value: chars.join('') });2+6
  }


  render() {
    let chars = null;
    chars = (
      <div>
        {[...this.state.value].map((singleChar, index) => {
         return <CharComp singleChar={singleChar} key={singleChar.id} click={() => this.clickHandler(index)}></CharComp>
        })}
      </div>
    );
    return (
      <div className="App">
        <input onChange={this.onChangeHandler} value={this.state.value}/>
        <p>{this.state.value}</p>
        <ValidationComp textLength={this.state.value.length}></ValidationComp>
        {chars}
      </div>
    );7897
  }
}

export default App;
-matchMedia,./ol9ki