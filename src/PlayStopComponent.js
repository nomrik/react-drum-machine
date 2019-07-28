import React from 'react';
import styled from 'styled-components';
import colors from './colors';

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
`

const Stop = styled.div`
    width: 0;
    height: 0;
    border: 18px solid black;
    cursor: pointer;
    transition: 300ms all ease-in-out;
    &:hover {
        opacity: 0.7;
    }
`

function PlayStop(props) {
    const { playing, onClick } = props;
    return (
        <div onClick={onClick}>
            {playing ? <Stop /> : <Play />}
        </div>
    )
}

export default PlayStop;