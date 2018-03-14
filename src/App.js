import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Vova", age: 30 },
      { name: "Slava", age: 33 },
      { name: "Lena", age: 32 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    
    this.setState({ persons: persons })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Vova", age: 30 },
        { name: event.target.value, age: 33 },
        { name: "Lena", age: 34 }
      ]
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I am a react app</h1>
        <button
          style={style}
          onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
