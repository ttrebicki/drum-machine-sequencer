import { configureStore } from "@reduxjs/toolkit";

import drumsReducer from "./drumMachine/drumMachineSlice";
import sequencerReducer from "./sequencer/SequencerSlice";

export default configureStore({
  reducer: {
    drums: drumsReducer,
    sequencer: sequencerReducer,
  },
});
