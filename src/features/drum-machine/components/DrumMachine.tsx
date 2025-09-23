import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentKey, selectDrumKey } from "../drumMachineSlice";
import { DrumPad } from "./drumPad";
import { Sequencer } from "../../sequencer/components/Sequencer";
import styles from "./drumMachine.module.scss";

export const DrumMachine = () => {
  const currentKey = useSelector(selectCurrentKey); // tekst do displaya;
  const drumKey = useSelector(selectDrumKey); // obiekt z drum samplami (i keymappingami - juz nie - do zmiany);
  const drumsArr = Object.entries(drumKey); // zmienia powyższy obiekt w arr;

  const renderDrumPads = () => {
    const pads: React.ReactElement[] = [];

    for (let i = 0; i < drumsArr.length; i += 3) {
      const rowItems = drumsArr.slice(i, i + 3);
      pads.push(
        <div
          key={"row-" + (i / 3 + 1)}
          id={"row-" + (i / 3 + 1)}
          className={"row " + styles.drum_row}
        >
          {rowItems.map(([key, hit]) => (
            <DrumPad key={key} drumKey={key} drumHit={hit} />
          ))}
        </div>,
      );
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
