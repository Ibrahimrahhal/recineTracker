import React, {Component} from 'react';
class NgIf extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            {this.props.exp?this.props.children:""}
            </>
        );
    }
}

export default NgIf;