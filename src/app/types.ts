export interface IState {
  drums: IDrumMachineState;
  sequencer: ISequencerState;
}

export interface IDrumMachineState {
  drumHits: IDrumHits;
  currentKey: string;
}

export interface IDrumHits {
  [index: string]: string;
  hihat_o: string;
  crash: string;
  ride: string;
  hihat: string;
  tom_1: string;
  tom_2: string;
  kick: string;
  snare_1: string;
  snare_2: string;
  snowball: string;
  bottlepick: string;
  footstep: string;
}

export interface ISequencerState {
  sequence: ISequencerStep[];
}

export interface ISequencerStep {
  [index: string]: boolean;
  kick: boolean;
  hihat: boolean;
  hihat_o: boolean;
  snare_1: boolean;
  snare_2: boolean;
  tom_1: boolean;
  tom_2: boolean;
  ride: boolean;
  crash: boolean;
  footstep: boolean;
  snowball: boolean;
  bottlepick: boolean;
}
