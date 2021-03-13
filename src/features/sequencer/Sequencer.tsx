import React from "react";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";

import { playSequence, sequenceSelector, toggleHit } from "./SequencerSlice";
import { ISequencerStep } from "./../../app/types";
import styles from "./Sequencer.module.scss";

export const Sequencer = () => {
  const sequenceFromState = useSelector(sequenceSelector);

  const dispatch = useDispatch();
  const toggleSound = (sound: string, step: number) => {
    dispatch(toggleHit({ sound, step }));
  };

  const playSteps = async () => {
    dispatch(playSequence());
  };

  const renderSteps = (sequence: ISequencerStep[]) => {
    const allSteps = sequence.map((currentElement, index) => {
      const sounds = Object.keys(currentElement).map((keyName) => {
        let step = index;
        return (
          <li
            className={cn(
              styles.sound,
              currentElement[keyName] && styles.active
            )}
            key={index + keyName}
            onClick={() => toggleSound(keyName, step)}
          />
        );
      });

      return (
        <ul
          className={styles.step}
          id={"step-" + index.toString()}
          key={index++}
        >
          {sounds}
        </ul>
      );
    });

    return allSteps;
  };

  return (
    <div className={styles.sequencer}>
      {renderSteps(sequenceFromState)}
      <div className={styles.play} onClick={playSteps}>
        PLAY
      </div>
    </div>
  );
};
