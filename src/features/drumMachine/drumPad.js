import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  playKey  } from './drumMachineSlice';
import styles from './drumMachine.module.css';

export const DrumPad = (props) => {

  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(playKey(props.drumKey, props.drumHit))
  }

  return(
        <div id={"drum-pad-" + props.drumKey} className={"col-4 drum-pad " + styles.drum_pad} onClick={handleClick}>
        {props.drumKey}
          <audio className={"clip " + styles.clip} id={props.drumKey} src={props.drumHit}>
          </audio>
        </div>
  )
}
