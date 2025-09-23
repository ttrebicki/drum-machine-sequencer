import { findElemAndPlay } from "../drumMachine/drumMachine.functions";
import { ISequencerState } from "../types";

export const makeSteps = (state: ISequencerState) => {
  const steps = state.measure.map((currentElement) => {
    const stepSounds = Object.keys(currentElement).filter((sound) => {
      return currentElement[sound];
    });

    return stepSounds;
  });
  return steps;
};

export const playAllSteps = (state: ISequencerState, bpm: number) => {
  const madeSteps = makeSteps(state);
  let recursivePlayer: ReturnType<typeof setTimeout> | null = null;

  let elemStep: HTMLElement | null;

  const playStepbyStep = (index = 0) => {
    const tempo = (1000 * 60) / bpm / 4;

    // Process current index
    madeSteps[index].forEach((sound) => {
      elemStep = document.getElementById("step-" + index.toString());
      if (elemStep) {
        findElemAndPlay(state, sound);
        animateTheStepMarker(elemStep);
      }
    });

    const nextIndex = (index + 1) % madeSteps.length;

    if (recursivePlayer !== null) {
      clearTimeout(recursivePlayer);
    }
    recursivePlayer = setTimeout(() => {
      playStepbyStep(nextIndex);
    }, tempo);
  };

  if (recursivePlayer !== null) {
    clearTimeout(recursivePlayer);
  }
  playStepbyStep();
};

export const animateTheStepMarker = (elemStep: HTMLElement) => {
  elemStep.style.background = "#fff";
  elemStep.style.boxShadow = "0 0 16px 4px #f55";

  setTimeout(() => {
    elemStep.style.background = "transparent";
    elemStep.style.boxShadow = "none";
  }, 100);
};
