import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends   Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Conctructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    shouldComponentUpdate(nextProps, nexState) {
        console.log('[Update App.js] Inside shouldComponentUpdate()', nextProps, nexState);
        return nextProps.persons !== this.state.persons ||
            nexState.showPersons !== this.state.showPersons;
    }

    componentWillUpdate(nextProps, nexState) {
        console.log('[Update App.js] Inside componentWillUpdate()', nextProps, nexState);
    }

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
        console.log('[App.js] Inside render()');
        let persons = null;

        if (this.state.showPersons) {

            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler} />
        }

        return (
            <div className={classes.App}>
                <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;
