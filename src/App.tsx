import React, { KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import { DrumMachine } from "./features/drum-machine";
import { currentHitSetter, playKey } from "./features/drum-machine";

const App = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (e: KeyboardEvent) => {
    dispatch(playKey(e.key.toUpperCase()));
    dispatch(currentHitSetter(e.key.toUpperCase()));
  };

  return (
    <div className="App" onKeyDown={(event) => handleKeyDown(event)} tabIndex={0}>
      <DrumMachine />
    </div>
  );
};

export default App;
