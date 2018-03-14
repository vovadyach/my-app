import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'aa1', name: "Vova", age: 30 },
      { id: 'bb2', name: "Slava", age: 33 },
      { id: 'cc3', name: "Lena", age: 32 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex]; it is direct mutating object. Not good.

    //This is copying the object. It is good
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = null;
    let buttonClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1> Hi, I am a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={buttonClass}
          onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
