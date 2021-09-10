import { createSlice } from "@reduxjs/toolkit";
import { IState, ISequencerState } from "./../../app/types";
import { playAllSteps } from "./Sequencer.functions";

const measure = () => {
  const measure = []
  let i;
  for (i = 0; i < 16; i++) {
    measure.push({
      kick: false,
      hihat: false,
      hihat_o: false,
      snare_1: false,
      snare_2: false,
      tom_1: false,
      tom_2: false,
      ride: false,
      crash: false,
      footstep: false,
      snowball: false,
      bottlepick: false,
    })
  }

  return measure
}

export const sequencerSlice = createSlice({
  name: "sequencer",
  initialState: {
    measure: measure(),
  },
  reducers: {
    playSequence: (state: ISequencerState) => {
      playAllSteps(state, 130);
    },

    toggleHit: (state: ISequencerState, action) => {
      // na kliknięcie obecny stan zmieniamy na odwrotny
      let step = action.payload.step;
      let sound = action.payload.sound;

      state.measure[step][sound] = !state.measure[step][sound];
    },
  },
});

export const { playSequence, toggleHit } = sequencerSlice.actions;

export const sequenceSelector = (state: IState) => state.sequencer.measure;

export default sequencerSlice.reducer;
