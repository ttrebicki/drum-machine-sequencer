import React from "react";
import { useDispatch } from "react-redux";
import { currentHitSetter, playKey } from "../drumMachineSlice";
import styles from "./drumMachine.module.scss";

interface IDrumPadProps {
  drumKey: string;
  drumHit: string;
}

// Key mapping for drum pads - matches constants/drumMachine.constants.ts
const keyMapping: { [key: string]: string } = {
  hihat_o: "Q",
  crash: "W", 
  ride: "E",
  hihat: "A",
  tom_1: "S",
  tom_2: "D",
  kick: "Z",
  snare_1: "X",
  snare_2: "C",
  snowball: "R",
  bottlepick: "T",
  footstep: "Y",
};

export const DrumPad = (props: IDrumPadProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(playKey(props.drumKey /*, props.drumHit*/));
    dispatch(currentHitSetter(props.drumKey));
  };

  const keyLabel = keyMapping[props.drumKey] || props.drumKey;

  return (
    <div
      id={"drum-pad-" + props.drumKey}
      className={"col-4 drum-pad " + styles.drum_pad}
      onClick={handleClick}
    >
      <div className={styles.drum_pad_label}>{props.drumKey}</div>
      <div className={styles.drum_pad_key}>{keyLabel}</div>
      <audio className={"clip " + styles.clip} id={props.drumKey} src={props.drumHit}></audio>
    </div>
  );
};
