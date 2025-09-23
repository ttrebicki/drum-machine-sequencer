import { createSlice } from "@reduxjs/toolkit";
import { findElemAndPlay, switcher } from "./drumMachine.functions";

import kick from "../../assets/audio/kick.wav";
import hihat from "../../assets/audio/test.wav";
import hihat_o from "../../assets/audio/hihat_o.wav";
import ride from "../../assets/audio/ride.wav";
import crash from "../../assets/audio/crash.wav";
import tom_1 from "../../assets/audio/tom_1.wav";
import tom_2 from "../../assets/audio/tom_2.wav";
import snare_1 from "../../assets/audio/snare_1.wav";
import snare_2 from "../../assets/audio/snare_2.wav";
import snowball from "../../assets/audio/snowball.wav";
import bottlepick from "../../assets/audio/bottlepick.wav";
import footstep from "../../assets/audio/footstep.wav";
import { IDrumMachineState, IState } from "../../shared/types";

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
