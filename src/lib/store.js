import { configureStore } from "@reduxjs/toolkit";

import drumsReducer from "../features/drum-machine/drumMachineSlice";
import sequencerReducer from "../features/sequencer/SequencerSlice";

export const store = configureStore({
  reducer: {
    drums: drumsReducer,
    sequencer: sequencerReducer,
  },
});

export default store;
