import React from 'react';
import './App.css';
import CounteroneR from './components2/CounteroneR';
import CounterTwoR from './components2/CounterTwoR';


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
      <CounterTwoR/>
    </div>
  );
}

export default App;
