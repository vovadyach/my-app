import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Conctructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps()', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentDidUpdate()', nextProps, nextState);
    }

    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                position={index}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Persons;
