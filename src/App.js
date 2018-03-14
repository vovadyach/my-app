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

  switchNameHandler = (newName) => {
    // console.log("was clicked!");
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Slava", age: 33 },
        { name: "Lena", age: 34 }
      ]
    })
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

    return (
      <div className="App">
        <h1> Hi, I am a react app</h1>
        <button
          style={style}
          onClick={this.togglePersons}>Toggle Persons</button>
        {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person
                changed={this.nameChangeHandler}
                click={this.switchNameHandler.bind(this, "Volodymyr")}
                name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Soccer</Person>
              <Person
                name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, " Hi, I'm a react app"));

  }
}

export default App;
