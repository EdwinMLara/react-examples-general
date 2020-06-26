import React, { useContext } from 'react';
import { UserConsumer } from "./userContext";
import { UserContext2, ChannelContext } from '../App';

function ComponentF(){

        const user = useContext(UserContext2);
        const channel = useContext(ChannelContext);
        return(
            <div> 
                <p>Contexto del Parrafo f</p>
                <UserConsumer>
                    {(username) => {
                        return <div>Hello {username}</div>
                    }} 
                </UserConsumer>
                <p>------------ Utliza el Contexto Mediante el Hook------------</p>
                {user} {channel}
            </div> 
        );
}
 
export default ComponentF;