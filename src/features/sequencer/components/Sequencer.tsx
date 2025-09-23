import React from "react";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";

import { togglePlayback, sequenceSelector, isPlayingSelector, toggleHit } from "../SequencerSlice";
import { ISequencerStep } from "../../../shared/types";
import styles from "./Sequencer.module.scss";
import { Button, IconButton } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export const Sequencer = () => {
  const sequenceFromState = useSelector(sequenceSelector);
  const isPlaying = useSelector(isPlayingSelector);

  const dispatch = useDispatch();
  const toggleSound = (sound: string, step: number) => {
    dispatch(toggleHit({ sound, step }));
  };

  const handleTogglePlayback = () => {
    dispatch(togglePlayback());
  };

  const renderSteps = (sequence: ISequencerStep[]) => {
    const allSteps = sequence.map((currentElement, index) => {
      const sounds = Object.keys(currentElement).map((keyName) => {
        let step = index;
        return (
          <IconButton
            className={cn(styles.sound, currentElement[keyName] && styles.active)}
            key={index + keyName}
            onClick={() => toggleSound(keyName, step)}
          >
            <AdbIcon />
          </IconButton>
        );
      });

      return (
        <ul className={styles.step} id={"step-" + index.toString()} key={index++}>
          {sounds}
        </ul>
      );
    });

    return allSteps;
  };

  return (
    <div className={styles.sequencer}>
      <div className={styles.controls}>
        <Button
          className={styles.play}
          variant={isPlaying ? "outlined" : "contained"}
          size={"large"}
          disableElevation={true}
          onClick={handleTogglePlayback}
        >
          {isPlaying ? "STOP" : "PLAY"}
        </Button>
      </div>
      <div className={styles.steps}>
        {renderSteps(sequenceFromState)}
      </div>
    </div>
  );
};
