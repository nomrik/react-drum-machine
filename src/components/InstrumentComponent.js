import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Swap from '../icons/swap.svg';
import colors from '../colors';

const Beat = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-color: ${colors.fg1};
  border-style: ${props =>
    props.index % props.mode === 0 ? 'solid' : 'dashed'};
  background-color: ${props => {
    if (props.currentBeat === props.index && props.playing) {
      return colors.bg1;
    }
    if (props.isActive) {
      return colors.bg2;
    }

    return colors.bg3;
  }};
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInstrument = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const InstrumentLabel = styled.span`
  width: 90px;
`;

function getNextSound(sounds, selectedSound) {
  const selectedSoundIndex = sounds.indexOf(selectedSound);
  if (selectedSoundIndex < 0) {
    return;
  }

  if (selectedSoundIndex === sounds.length - 1) {
    return sounds[0];
  }

  return sounds[selectedSoundIndex + 1];
}

function Instrument(props) {
  const {
    sounds,
    selectedSound,
    mode,
    onChangeSound,
    beats = [],
    onToggleBeat,
    currentBeat,
    playing
  } = props;
  return (
    <StyledInstrument>
      <InstrumentLabel>{selectedSound.toUpperCase()}</InstrumentLabel>
      <Icon
        src={Swap}
        onClick={() => {
          onChangeSound(getNextSound(sounds, selectedSound));
        }}
      />
      <Grid>
        {beats.map((beat, index) => (
          <Beat
            index={index}
            key={index}
            mode={mode}
            isActive={beat}
            currentBeat={currentBeat}
            playing={playing}
            onClick={() => onToggleBeat(index)}
          />
        ))}
      </Grid>
    </StyledInstrument>
  );
}

export default Instrument;
