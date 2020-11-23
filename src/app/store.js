import { configureStore } from '@reduxjs/toolkit';
import drumsReducer from '../features/drumMachine/drumMachineSlice.js';

export default configureStore({
  reducer: {
    drums: drumsReducer,
  },
});
