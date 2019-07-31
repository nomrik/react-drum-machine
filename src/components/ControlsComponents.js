import React from 'react';
import styled from 'styled-components';

import Triplets from '../icons/triplets.svg';
import Eighths from '../icons/eighths.svg';
import RangeInput from './RangeInput';
import Icon from './Icon';

const StyledControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  & > * {
    margin: 5px;
  }
`;

export default function Controls({
  tempo,
  volume,
  mode,
  bars,
  onSetTempo,
  onSetVolume,
  onSetMode
}) {
  return (
    <StyledControls>
      <RangeInput
        title="TEMPO"
        min={60}
        max={250}
        value={tempo}
        onChange={e => {
          const newTempo = e.target.value;
          onSetTempo(newTempo);
        }}
      />
      <RangeInput
        title="VOLUME"
        min={0}
        max={100}
        value={Math.round(volume * 100)}
        onChange={e => {
          const newVolume = e.target.value;
          onSetVolume(newVolume / 100);
        }}
      />
      <Icon
        width={30}
        src={mode === 4 ? Triplets : Eighths}
        onClick={() => onSetMode(mode === 4 ? 6 : 4, bars)}
      />
    </StyledControls>
  );
}
