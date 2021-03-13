import { createSlice } from "@reduxjs/toolkit";
import { findElemAndPlay } from "./drumMachine.functions";

import kick from "./drumHits/kick.wav";
import hihat from "./drumHits/test.wav";
import hihat_o from "./drumHits/hihat_o.wav";
import ride from "./drumHits/ride.wav";
import crash from "./drumHits/crash.wav";
import tom_1 from "./drumHits/tom_1.wav";
import tom_2 from "./drumHits/tom_2.wav";
import snare_1 from "./drumHits/snare_1.wav";
import snare_2 from "./drumHits/snare_2.wav";
import snowball from "./drumHits/snowball.wav";
import bottlepick from "./drumHits/bottlepick.wav";
import footstep from "./drumHits/footstep.wav";
import { IState } from "../../app/types";

export const drumsSlice = createSlice({
  name: "drums",
  initialState: {
    drumHits: {
      hihat_o: hihat_o,
      crash: crash,
      ride: ride,
      hihat: hihat,
      tom_1: tom_1,
      tom_2: tom_2,
      kick: kick,
      snare_1: snare_1,
      snare_2: snare_2,
      snowball: snowball,
      bottlepick: bottlepick,
      footstep: footstep,
    },
    currentKey: ":: PRESS A KEY TO PLAY ::",
  },

  reducers: {
    playKey: (state, action) => findElemAndPlay(state, action.payload),
  },
});

export const { playKey } = drumsSlice.actions;

export const selectDrumHit = (state: IState) => (drumHit: string) =>
  state.drums.drumHits[drumHit];
export const selectDrumKey = (state: IState) => state.drums.drumHits;
export const selectCurrentKey = (state: IState) => state.drums.currentKey;

export default drumsSlice.reducer;
