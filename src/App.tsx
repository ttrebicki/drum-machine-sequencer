import React, { KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { DrumMachine } from "./features/drumMachine/DrumMachine";
import { playKey } from "./features/drumMachine/drumMachineSlice";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (e: KeyboardEvent) => {
    dispatch(playKey(e.key.toUpperCase()));
  };

  return (
    <div className="App" onKeyDown={event => handleKeyDown(event)} tabIndex={0}>
      <DrumMachine />
    </div>
  );
};

export default App;
