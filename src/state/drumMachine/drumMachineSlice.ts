import { createSlice } from "@reduxjs/toolkit";
import { findElemAndPlay, switcher } from "./drumMachine.functions";

import kick from "../../files/drumHits/kick.wav";
import hihat from "../../files/drumHits/test.wav";
import hihat_o from "../../files/drumHits/hihat_o.wav";
import ride from "../../files/drumHits/ride.wav";
import crash from "../../files/drumHits/crash.wav";
import tom_1 from "../../files/drumHits/tom_1.wav";
import tom_2 from "../../files/drumHits/tom_2.wav";
import snare_1 from "../../files/drumHits/snare_1.wav";
import snare_2 from "../../files/drumHits/snare_2.wav";
import snowball from "../../files/drumHits/snowball.wav";
import bottlepick from "../../files/drumHits/bottlepick.wav";
import footstep from "../../files/drumHits/footstep.wav";
import { IDrumMachineState, IState } from "../types";

export const drumsSlice = createSlice({
  name: "drums",
  initialState: {
    drumHits: {
      hihat_o,
      crash,
      ride,
      hihat,
      tom_1,
      tom_2,
      kick,
      snare_1,
      snare_2,
      snowball,
      bottlepick,
      footstep,
    },
    currentKey: ":: PRESS A KEY TO PLAY ::",
  },

  reducers: {
    currentHitSetter: (state: IDrumMachineState, action) => {
      state.currentKey = switcher(action.payload);
    },
    playKey: (state, action) => findElemAndPlay(state, action.payload),
  },
});

export const { currentHitSetter, playKey } = drumsSlice.actions;

export const selectDrumHit = (state: IState) => (drumHit: string) => state.drums.drumHits[drumHit];
export const selectDrumKey = (state: IState) => state.drums.drumHits;
export const selectCurrentKey = (state: IState) => state.drums.currentKey;

export default drumsSlice.reducer;
