import { findElemAndPlay } from "../drumMachine/drumMachine.functions";
import { ISequencerState } from "./../../app/types";

export const makeSteps = (state: ISequencerState) => {
  const steps = state.measure.map((currentElement) => {
    let stepSounds = Object.keys(currentElement).filter((sound) => {
      return currentElement[sound];
    });

    return stepSounds;
  });
  return steps;
};

export const playAllSteps = (state: ISequencerState, bpm: number) => {
  var madeSteps = makeSteps(state);

  var elemStep;

  const playStepbyStep = (index = 0, beats = bpm, s = state) => {
    const tempo = (1000 * 60) / bpm / 4;
    const recursivePlayer = setTimeout((i = index) => {
      playStepbyStep(i, beats, s);
    }, tempo);

    madeSteps[index].map((sound) => {
      elemStep = document.getElementById("step-" + index.toString());
      if (elemStep) {
        findElemAndPlay(state, sound);
        blowTheStep(elemStep);
      }
    });

    index++;

    if (index < madeSteps.length) {
      return recursivePlayer;
    } else {
      index = 0;
      return recursivePlayer;
    }
  };
  playStepbyStep();
};

export const blowTheStep = (elemStep: HTMLElement) => {
  elemStep.style.background = "#fff";
  elemStep.style.boxShadow = "0 0 16px 4px #f55";

  setTimeout(() => {
    elemStep.style.background = "transparent";
    elemStep.style.boxShadow = "none";
  }, 100);
};
