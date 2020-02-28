import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        window['form'] = this.props
        return (
            <form style={this.props.style}>
                
            </form>
        );
    }
}

export default Form;