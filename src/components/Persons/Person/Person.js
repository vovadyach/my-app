import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Conctructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElm.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!!!</p>
                <p>{this.props.children}</p>
                <input type="text" 
                    ref={(ipt) => {this.inputElm = ipt} }
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);