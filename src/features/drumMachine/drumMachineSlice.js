import { createSlice } from '@reduxjs/toolkit';
import kick from './drumHits/kick.wav'
import hihat from './drumHits/hihat.wav'
import hihat_o from './drumHits/hihat_o.wav'
import ride from './drumHits/ride.wav'
import crash from './drumHits/crash.wav'
import tom_1 from './drumHits/tom_1.wav'
import tom_2 from './drumHits/tom_2.wav'
import snare_1 from './drumHits/snare_1.wav'
import snare_2 from './drumHits/snare_2.wav'

export const drumsSlice = createSlice({
  name: 'drums',
  initialState: {
    value: 0,
    drumHits: {
      'Z': kick,
      'X': snare_1,
      'C': snare_2,
      'A': hihat,
      'S': tom_1,
      'D': tom_2,
      'Q': hihat_o,
      'W': crash,
      'E': ride
    },
    currentKey: ":: PRESS A KEY TO PLAY ::",
  },
  reducers: {
    playKey: (state, action) => {
      const ap = action.payload;
      const elemAudio = document.getElementById(ap);
      const elemParent = document.getElementById("drum-pad-" + ap);

      if (action.payload && elemAudio) {
        state.currentKey =
        ap === 'Z' ? 'KICK'
        : ap === 'X' ? 'SNARE_1'
        : ap === 'C' ? 'SNARE_2'
        : ap === 'A' ? 'HIHAT_CLOSED'
        : ap === 'S' ? 'TOM_1'
        : ap === 'D' ? 'TOM_2'
        : ap === 'Q' ? 'HIHAT_OPEN'
        : ap === 'W' ? 'CRASH'
        : ap === 'E' ? 'RIDE'
        : 'KEY NOT ASSIGNED' + ap;

        elemAudio.pause();
        elemAudio.currentTime = 0;
        elemAudio.play();

        elemParent.style.background = "#f55";
        elemParent.style.transform = "rotate3d(1,1,1,180deg)";
        setTimeout(() => {
          elemParent.style.background = "";
          elemParent.style.transform = "rotate3d(1,1,1,360deg)";
        }, 100)
      }

      else {
        console.log("key not assigned: " + ap)
      }

    }
  },
});

export const { playKey } = drumsSlice.actions;

export const asyncFunc = amount => dispatch => {
  setTimeout(() => {
    console.log('not empty!')
  }, 1000);
};

export const selectDrumHit = state => (drumHit) => state.drums.drumHits[drumHit];
export const selectDrumKey = state => state.drums.drumHits;
export const selectCurrentKey = state => state.drums.currentKey;

export default drumsSlice.reducer;
