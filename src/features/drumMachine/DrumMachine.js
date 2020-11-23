import React from 'react';
import { useSelector } from 'react-redux';
import {  selectDrumHit, selectCurrentKey  } from './drumMachineSlice';
import {  DrumPad  } from './drumPad'
import styles from './drumMachine.module.css';

export const DrumMachine = () => {
  const currentKey = useSelector(selectCurrentKey);
  const drumHit = useSelector(selectDrumHit);
/*
  const drumKey = useSelector(selectDrumKey);
  const drumPads = (obj) => {
    let counter = 0;
    for (i in obj) {

      if (counter === 0) {
        return(<div></div>)
      }
      else if (counter % 3 === 0) {
        return (
            <DrumPad drumKey={[i]} drumHit={drumHit([i])}
          </div>
        )
      }
      else {

      }

      counter++;
      return(

      )
    }
  }
  // dodac dynamiczny render for item in (state.drums.drumHits)
   */

  return(
    <div id="drum-machine" className={styles.drum_machine}>
      <div className={"row " + styles.drum_row}>
        <div id="display" className={"col-12 " + styles.display}>{currentKey}</div>
      </div>
      <div className={"row " + styles.drum_row}>
        <DrumPad drumKey='Q' drumHit={drumHit('Q')} />
        <DrumPad drumKey='W' drumHit={drumHit('W')} />
        <DrumPad drumKey='E' drumHit={drumHit('E')} />
      </div>
      <div className={"row " + styles.drum_row}>
        <DrumPad drumKey='A' drumHit={drumHit('A')} />
        <DrumPad drumKey='S' drumHit={drumHit('S')} />
        <DrumPad drumKey='D' drumHit={drumHit('D')} />
      </div>
      <div className={"row " + styles.drum_row}>
        <DrumPad drumKey='Z' drumHit={drumHit('Z')} />
        <DrumPad drumKey='X' drumHit={drumHit('X')} />
        <DrumPad drumKey='C' drumHit={drumHit('C')} />
      </div>
    </div>
  )
}
