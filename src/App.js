import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react app</h1>
        <Person name="Vova" age="43"/>
        <Person name="Slava" age="23">My hobbies: Soccer</Person>
        <Person name="Lena" age="33"/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, " Hi, I'm a react app"));

  }
}

export default App;
  