import React, {Component} from 'react';
class NgIf extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    getChildren(){
        if(this.props.exp)
        return this.props.children;
        else return this.props.else || "";
    }
    render() {
        return ( this.getChildren() );
    }
}

export default NgIf;