import { IDrumMachineState, ISequencerState } from "../../app/types";
import {
  DRUM_HIT_0,
  DRUM_HIT_1,
  DRUM_HIT_10,
  DRUM_HIT_11,
  DRUM_HIT_2,
  DRUM_HIT_3,
  DRUM_HIT_4,
  DRUM_HIT_5,
  DRUM_HIT_6,
  DRUM_HIT_7,
  DRUM_HIT_8,
  DRUM_HIT_9,
} from "./drumMachine.constants";

export const playSound = (elemAudio : HTMLAudioElement | null) => {
  if (elemAudio) {
    elemAudio.pause();
    elemAudio.currentTime = 0;
    elemAudio.play();
  }
};

export const rotatePad = (elemParent : HTMLElement) => {
  elemParent.style.background = "#f55";
  elemParent.style.transform = "rotate3d(1,1,1,180deg)";

  setTimeout(() => {
    elemParent.style.background = "";
    elemParent.style.transform = "rotate3d(1,1,1,720deg)";
  }, 100);
};

export const currentHitScreenSetter = (
  state: IDrumMachineState,
  payload: string
) => {
  state.currentKey = switcher(payload);
};

export const switcher = (p : string, defaultMessage = "") => {
  switch (p) {
    case DRUM_HIT_0.key:
    case DRUM_HIT_0.sound:
      return DRUM_HIT_0.sound;

    case DRUM_HIT_1.key:
    case DRUM_HIT_1.sound:
      return DRUM_HIT_1.sound;

    case DRUM_HIT_2.key:
    case DRUM_HIT_2.sound:
      return DRUM_HIT_2.sound;

    case DRUM_HIT_3.key:
    case DRUM_HIT_3.sound:
      return DRUM_HIT_3.sound;

    case DRUM_HIT_4.key:
    case DRUM_HIT_4.sound:
      return DRUM_HIT_4.sound;

    case DRUM_HIT_5.key:
    case DRUM_HIT_5.sound:
      return DRUM_HIT_5.sound;

    case DRUM_HIT_6.key:
    case DRUM_HIT_6.sound:
      return DRUM_HIT_6.sound;

    case DRUM_HIT_7.key:
    case DRUM_HIT_7.sound:
      return DRUM_HIT_7.sound;

    case DRUM_HIT_8.key:
    case DRUM_HIT_8.sound:
      return DRUM_HIT_8.sound;

    case DRUM_HIT_9.key:
    case DRUM_HIT_9.sound:
      return DRUM_HIT_9.sound;

    case DRUM_HIT_10.key:
    case DRUM_HIT_10.sound:
      return DRUM_HIT_10.sound;

    case DRUM_HIT_11.key:
    case DRUM_HIT_11.sound:
      return DRUM_HIT_11.sound;

    default:
      return defaultMessage;
  }
};

export const findElemAndPlay = (
  state: IDrumMachineState | ISequencerState,
  payload: string
) => {
  const elemAudio : any = document.getElementById(
    switcher(payload)
  );
  const elemParent = document.getElementById("drum-pad-" + switcher(payload));

  if (elemParent && elemAudio) {
    // currentHitScreenSetter(state, switcher(payload));
    playSound(elemAudio);
    rotatePad(elemParent);
  }
};
