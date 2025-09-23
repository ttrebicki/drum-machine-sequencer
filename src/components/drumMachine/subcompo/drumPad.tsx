import React from "react";
import { useDispatch } from "react-redux";
import { currentHitSetter, playKey } from "../../../state/drumMachine/drumMachineSlice";
import styles from "../drumMachine.module.scss";

interface IDrumPadProps {
  drumKey: string;
  drumHit: string;
}

// Key mapping for drum pads
const keyMapping: { [key: string]: string } = {
  kick: "Q",
  snare_1: "W",
  snare_2: "E",
  hihat: "A",
  hihat_o: "S",
  crash: "D",
  ride: "Z",
  tom_1: "X",
  tom_2: "C",
  footstep: "F",
  snowball: "G",
  bottlepick: "H",
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
