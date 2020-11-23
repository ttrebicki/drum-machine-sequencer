import React from 'react';
import { useDispatch } from 'react-redux';
import { DrumMachine } from './features/drumMachine/DrumMachine';
import {  playKey  } from './features/drumMachine/drumMachineSlice';
import './App.css';

const App = () => {

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    dispatch(playKey(e.key.toUpperCase()))
  }

    return (<div className="App" onKeyDown={handleKeyDown} tabIndex="0"><DrumMachine/></div>);

}

export default App;
