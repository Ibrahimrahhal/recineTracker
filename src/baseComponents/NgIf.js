import React, {Component} from 'react';
class NgIf extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let Else = this.props.else
        return (
            <>
            {this.props.exp?this.props.children:Else?Else:""}
            </>
        );
    }
}

export default NgIf;