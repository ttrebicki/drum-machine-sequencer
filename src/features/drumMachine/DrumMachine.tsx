import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentKey, selectDrumKey } from "./drumMachineSlice";
import { DrumPad } from "./drumPad";
import styles from "./drumMachine.module.scss";
import { Sequencer } from "../sequencer/Sequencer";

export const DrumMachine = () => {
  const currentKey = useSelector(selectCurrentKey); // tekst do displaya;
  const drumKey = useSelector(selectDrumKey); // obiekt z drum samplami (i keymappingami - juz nie - do zmiany);
  const drumsArr = Object.entries(drumKey); // zmienia powyższy obiekt w arr;

  const renderDrumPads = () => {
    var pads = [];

    for (var i = 0; i < drumsArr.length; i++) {
      if (i === 0 || i % 3 === 0) {
        pads.push(
          <div
            key={"row-" + (i / 3 + 1)}
            id={"row-" + (i / 3 + 1)}
            className={"row " + styles.drum_row}
          >
            <DrumPad drumKey={drumsArr[i][0]} drumHit={drumsArr[i][1]} />
            <DrumPad
              drumKey={drumsArr[i + 1][0]}
              drumHit={drumsArr[i + 1][1]}
            />
            <DrumPad
              drumKey={drumsArr[i + 2][0]}
              drumHit={drumsArr[i + 2][1]}
            />
          </div>
        );
      }
    }
    return pads;
  };

  return (
    <>
      <div id="drum-machine" className={styles.drum_machine}>
        <div className={"row " + styles.drum_row}>
          <div id="display" className={"col-12 " + styles.display}>
            {currentKey}
          </div>
        </div>
        {renderDrumPads()}
      </div>
      <Sequencer />
    </>
  );
};
