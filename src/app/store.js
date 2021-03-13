import { configureStore } from "@reduxjs/toolkit";

import drumsReducer from "../features/drumMachine/drumMachineSlice";
import sequencerReducer from "../features/sequencer/SequencerSlice";

export default configureStore({
  reducer: {
    drums: drumsReducer,
    sequencer: sequencerReducer,
  },
});
