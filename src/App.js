import React from 'react';
import './App.css';
import CounteroneR from './components2/CounteroneR';


export const UserContext2 = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/*<UserProvider value="vishwas">
        <ComponentC/>
      </UserProvider>*/}
      {/*<UserContext2.Provider value="Edwin Miguel">
        <ChannelContext.Provider value="Insoel.comm">
          <ComponentE/>
        </ChannelContext.Provider>
    </UserContext2.Provider>*/}
      <CounteroneR></CounteroneR>   
    </div>
  );
}

export default App;
