import React, { Component, useContext } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';
import { ChannelContext,UserContext2 } from '../App';

class ComponentE extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = UserContext;
    
    render() { 
        return (
            <div>
                CompnentE context {this.context}
                <UserContext2.Consumer>
                    {
                        user =>{
                        return (<ChannelContext.Consumer>
                                {
                                    channel => {
                                    return <div>User constext value {user}, Channel {channel}</div>
                                    }
                                }
                                </ChannelContext.Consumer>
                            )
                        }
                    }
                </UserContext2.Consumer>
                <ComponentF/>
            </div>
        );
    }
}
 
export default ComponentE;