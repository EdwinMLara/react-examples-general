import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = UserContext;
    
    render() { 
        return (
            <div>
                CompnentE context {this.context}
                <ComponentF/>
            </div>
        );
    }
}
 
export default ComponentE;