import { IDrumMachineState, ISequencerState } from "../types";
import * as DrumHits from "../../constants/drumMachine.constants";

export const playSound = (elemAudio: HTMLAudioElement | null) => {
  if (elemAudio) {
    elemAudio.pause();
    elemAudio.currentTime = 0;
    elemAudio.play();
  }
};

export const rotatePad = (elemParent: HTMLElement) => {
  elemParent.style.background = "#f55";
  elemParent.style.transform = "rotate3d(1,1,1,180deg)";

  setTimeout(() => {
    elemParent.style.background = "";
    elemParent.style.transform = "rotate3d(1,1,1,720deg)";
  }, 100);
};

export const currentHitScreenSetter = (state: IDrumMachineState, payload: string) => {
  state.currentKey = switcher(payload);
};

export const switcher = (p: string, defaultMessage = "") => {
  switch (p) {
    case DrumHits.DRUM_HIT_0.key:
    case DrumHits.DRUM_HIT_0.sound:
      return DrumHits.DRUM_HIT_0.sound;

    case DrumHits.DRUM_HIT_1.key:
    case DrumHits.DRUM_HIT_1.sound:
      return DrumHits.DRUM_HIT_1.sound;

    case DrumHits.DRUM_HIT_2.key:
    case DrumHits.DRUM_HIT_2.sound:
      return DrumHits.DRUM_HIT_2.sound;

    case DrumHits.DRUM_HIT_3.key:
    case DrumHits.DRUM_HIT_3.sound:
      return DrumHits.DRUM_HIT_3.sound;

    case DrumHits.DRUM_HIT_4.key:
    case DrumHits.DRUM_HIT_4.sound:
      return DrumHits.DRUM_HIT_4.sound;

    case DrumHits.DRUM_HIT_5.key:
    case DrumHits.DRUM_HIT_5.sound:
      return DrumHits.DRUM_HIT_5.sound;

    case DrumHits.DRUM_HIT_6.key:
    case DrumHits.DRUM_HIT_6.sound:
      return DrumHits.DRUM_HIT_6.sound;

    case DrumHits.DRUM_HIT_7.key:
    case DrumHits.DRUM_HIT_7.sound:
      return DrumHits.DRUM_HIT_7.sound;

    case DrumHits.DRUM_HIT_8.key:
    case DrumHits.DRUM_HIT_8.sound:
      return DrumHits.DRUM_HIT_8.sound;

    case DrumHits.DRUM_HIT_9.key:
    case DrumHits.DRUM_HIT_9.sound:
      return DrumHits.DRUM_HIT_9.sound;

    case DrumHits.DRUM_HIT_10.key:
    case DrumHits.DRUM_HIT_10.sound:
      return DrumHits.DRUM_HIT_10.sound;

    case DrumHits.DRUM_HIT_11.key:
    case DrumHits.DRUM_HIT_11.sound:
      return DrumHits.DRUM_HIT_11.sound;

    default:
      return defaultMessage;
  }
};

export const findElemAndPlay = (state: IDrumMachineState | ISequencerState, payload: string) => {
  const elemAudio: any = document.getElementById(switcher(payload));
  const elemParent = document.getElementById("drum-pad-" + switcher(payload));

  if (elemParent && elemAudio) {
    // currentHitScreenSetter(state, switcher(payload));
    playSound(elemAudio);
    rotatePad(elemParent);
  }
};
