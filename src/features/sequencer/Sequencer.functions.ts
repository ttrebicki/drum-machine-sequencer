import { findElemAndPlay } from "../drum-machine/drumMachine.functions";
import { ISequencerState } from "../../shared/types";

// Global timer reference to ensure only one sequencer runs at a time
let globalSequencerTimer: ReturnType<typeof setTimeout> | null = null;

export const makeSteps = (state: ISequencerState) => {
  const steps = state.measure.map((currentElement) => {
    const stepSounds = Object.keys(currentElement).filter((sound) => {
      return currentElement[sound];
    });

    return stepSounds;
  });
  return steps;
};

export const stopSequencer = () => {
  if (globalSequencerTimer !== null) {
    clearTimeout(globalSequencerTimer);
    globalSequencerTimer = null;
  }
};

export const playAllSteps = (state: ISequencerState, bpm: number) => {
  // Stop any existing sequencer session first
  stopSequencer();

  const madeSteps = makeSteps(state);
  const tempo = (1000 * 60) / bpm / 4;

  const playStepbyStep = (index = 0) => {
    // Process current step
    madeSteps[index].forEach((sound) => {
      const elemStep = document.getElementById("step-" + index.toString());
      if (elemStep) {
        findElemAndPlay(state, sound);
        animateTheStepMarker(elemStep);
      }
    });

    // Schedule next step
    const nextIndex = (index + 1) % madeSteps.length;
    globalSequencerTimer = setTimeout(() => {
      playStepbyStep(nextIndex);
    }, tempo);
  };

  // Start the sequencer
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
