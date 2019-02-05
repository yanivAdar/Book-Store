import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sdvs', name: 'nana', age: 34 },
      { id: 'vse', name: 'lala', age: 23 },
      { id: 'svsg', name: 'vava', age: 13 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('clicked');
  //   // DO NOT DO THIS: this.state.persons[0].name = 'nananana';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 34 },
  //       { name: 'lala', age: 23 },
  //       { name: 'vava', age: 18 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // modern way of creating a new array and spreding a given array's elements in it
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    // make a copy of the person objuct
    const person = { ...this.state.persons[personIndex] };
    // assign the new value to the new copy 
    person.name = event.target.value;

    // create a copy of the property from the state we want to update
    const persons = [...this.state.persons];
    // assign the new value to the new copy
    persons[personIndex] = person

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {

    const btnStyle = {
      backgroundColor: 'lightgreen',
      font: 'inherit',
      border: '1px solid #999',
      padding: '8px'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} // allows react to efficiently update the current element behind the csene
              changed={(event) => this.changeNameHandler(event, person.id)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Testing react App</h1>
        <p>This works! amazing</p>
        <button
          style={btnStyle}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m a react page'));
  }
}

export default App;
