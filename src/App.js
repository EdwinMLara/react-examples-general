import React from 'react';
import logo from './logo.svg';
import './App.css';
import FocusInput from './components/FocusInput';
import RefsDemo from './components/RefsDemo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounterThree from './components/HookCounterThree';

function App() {
  return (
    <div className="App">
      {/*<UserProvider value="vishwas">
        <ComponentC/>
      </UserProvider>*/}  
      <HookCounterThree></HookCounterThree>
    </div>
  );
}

export default App;
