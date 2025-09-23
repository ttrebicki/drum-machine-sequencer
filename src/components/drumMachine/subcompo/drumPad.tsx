import React from "react";
import { useDispatch } from "react-redux";
import { currentHitSetter, playKey } from "../../../state/drumMachine/drumMachineSlice";
import styles from "../drumMachine.module.scss";

interface IDrumPadProps {
  drumKey: string;
  drumHit: string;
}

export const DrumPad = (props: IDrumPadProps) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(playKey(props.drumKey /*, props.drumHit*/));
    dispatch(currentHitSetter(props.drumKey));
  };

  return (
    <div
      id={"drum-pad-" + props.drumKey}
      className={"col-4 drum-pad " + styles.drum_pad}
      onClick={handleClick}
    >
      {props.drumKey}
      <audio className={"clip " + styles.clip} id={props.drumKey} src={props.drumHit}></audio>
    </div>
  );
};
