import React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const getThumbStyle = () => `
    -webkit-appearance: none;
    border: 1px solid ${colors.fg1};
    height: 12px;
    width: 12px;
    background-color: ${colors.fg1};
    cursor: pointer;
    margin-top: -4.5px;
    transition: 300ms all ease-in-out;
    &:hover {
        background-color: ${colors.bg1};
        border-color: ${colors.bg1};
    }
`;

const getTrackStyle = () => `
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: ${colors.fg1};
    border: 0.2px solid ${colors.fg1};
`;

const RangeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  margin-top: 5px;

  &::-webkit-slider-thumb {
    ${getThumbStyle()}
  }

  &::-moz-range-thumb {
    ${getThumbStyle()}
  }

  &::-webkit-slider-runnable-track {
    ${getTrackStyle()}
  }

  &::-moz-range-track {
    ${getTrackStyle()}
  }

  &:focus {
    outline: none;
  }
`;

const RangeInput = props => {
  const { min, max, title, value, onChange } = props;
  return (
    <RangeInputWrapper>
      <Info>
        <div>{title}</div>
        <div>{value}</div>
      </Info>
      <StyledRangeInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </RangeInputWrapper>
  );
};

export default RangeInput;
