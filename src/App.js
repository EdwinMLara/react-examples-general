import React, {useReducer} from 'react';
import './App.css';
import DocTitleOne from './customHook/components/DocTitleOne';
import DocTitleTwo from './customHook/components/DocTitleTwo';

export const UserContext2 = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const inicialState = 0;

const reducer = (state, action) => {
  switch(action){
      case 'increment':
          return state + 1
      case 'decrement':
          return state - 1
      case 'reset':
          return inicialState
      default:
          return state
  }
}

function App() {

  const [count,dispatch] = useReducer(reducer,inicialState)

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
        <DocTitleOne/>
        <DocTitleTwo/>
      </div>
  );
}

export default App;
