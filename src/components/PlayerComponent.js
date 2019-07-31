import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sampler, Transport, Sequence, Master } from "tone";

import colors from "../colors";
import { getUrlsByNotes } from "../core/constants/instrumentsConstants";

const Play = styled.div`
  width: 0;
  height: 0;
  transition: 300ms all ease-in-out;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 36px solid ${colors.play};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Stop = styled.div`
  width: 0;
  height: 0;
  border: 18px solid black;
  cursor: pointer;
  transition: 300ms all ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

const PlayerComponent = ({
  playing,
  onClick,
  tempo,
  numberOfBeats,
  onSetCurrentBeat,
  mode,
  volume,
  notesByBeat
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sampler, setSampler] = useState(undefined);
  const subDivision = mode === 4 ? "16n" : "16t";

  useEffect(() => {
    const newSampler = new Sampler(getUrlsByNotes(), () => {
      setIsLoaded(true);
    }).toMaster();
    setSampler(newSampler);
  }, []);

  useEffect(() => {
    let loop;
    if (playing && sampler) {
      loop = new Sequence(
        (time, beat) => {
          sampler.triggerAttackRelease(notesByBeat[beat], subDivision, time);
          onSetCurrentBeat(beat);
        },
        [...Array(numberOfBeats).keys()],
        subDivision
      );

      loop.start(0);
    }
    return function cleanup() {
      loop && loop.stop();
    };
  }, [sampler, numberOfBeats, playing, onSetCurrentBeat, notesByBeat, subDivision]);

  useEffect(() => {
    Transport.bpm.value = tempo;
  }, [tempo]);

  useEffect(() => {
    if (playing) {
      Transport.start();
    } else {
      onSetCurrentBeat(0);
      Transport.stop();
    }
  }, [playing, onSetCurrentBeat]);

  useEffect(() => {
      if (volume === 0) {
          Master.mute = true;
      } else {
          Master.mute = false;
          Master.volume.value = -25 + (volume * 100 / 4)
      }
  }, [volume])

  return isLoaded ? (
    <div onClick={onClick}>{playing ? <Stop /> : <Play />}</div>
  ) : (
    <div>Loading Samples..</div>
  );
};

export default PlayerComponent;
