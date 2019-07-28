import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Instrument from './Instrument';
import PlayStop from './PlayStop';
import Triplets from './icons/triplets.svg';
import Eighths from './icons/eighths.svg';
import Github from './icons/github.png';
import Linkedin from './icons/linkedin.svg';
import RangeInput from './RangeInput';

import player from './player';
import colors from './colors';
import Icon from './Icon';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }

  body {
    background-color: ${colors.bg3};
    color: 'black';
    font-size: 14px;
    height: 100%;
  }

  a {
    text-decoration: none;
    &:visited {
      color: ${colors.fg1};
    }
    &:hover {
      color: ${colors.fg2};
    }
    
  }
`

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > * {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  & > * {
    margin: 5px;
  }
`

const Footer = styled.div`
  margin-top: auto;
  font-size: 10px;
`


function App() {
  const [ tempo, setTempo ] = useState(100);
  const [ volume, setVolume ] = useState(1);
  const [ mode, setMode ] = useState(4);
  const [ bars, setBars ] = useState(1);
  const [ currentBeat, setCurrentBeat ] = useState(0);
  const [ playing, setPlaying ] = useState(false);
  const [ instruments, setInstruments ] = useState({ 
    'kick': {
      sound: 'kick1',
      beats: []
    },
    'hihat': {
      sound: 'hihat1',
      beats: []
    } ,
    'snare': {
      sound: 'snare1',
      beats: []
    }
  });

  const numberOfBeats = mode * bars * 4;

  useEffect(() => {
    setCurrentBeat(0);
  }, [playing])

  useEffect(() => {
    let intervalId = '';
    if (playing) {
      intervalId = setInterval(() => {
        Object.keys(instruments).forEach(instrument => {
          const beats = instruments[instrument].beats;
          if (beats[currentBeat]) {
            player.play(instruments[instrument].sound);
          }
        })
        setCurrentBeat(currentBeat => currentBeat < (numberOfBeats - 1) ? currentBeat + 1 : 0)
      }, 60000 / mode / tempo)
    }
    
    return function cleanup() {
      clearInterval(intervalId);
    }
  }, [tempo, playing, currentBeat, instruments])


  useEffect(() => {
    const newInstruments = {...instruments};
    Object.keys(newInstruments).forEach(instrument => {
      newInstruments[instrument].beats = Array(numberOfBeats).fill(false);
    })
    setInstruments(newInstruments);
  }, [mode])

  useEffect(() => {
    player.setVolume(volume)
  }, [volume])

  return (
      <StyledApp>
        <GlobalStyle />
        <Controls>
          <RangeInput title='TEMPO' min={60} max={250} value={tempo} onChange={e => {
            const newTempo = e.target.value;
            setTempo(newTempo)
          }} />
          <RangeInput title='VOLUME' min={0} max={100} value={Math.round(volume * 100)} onChange={e => {
            const newVolume = e.target.value;
            setVolume(newVolume / 100)
          }} />
          
          <Icon width={30} src={mode === 4 ? Triplets : Eighths} onClick={() => setMode(mode => mode === 4 ? 3 : 4)} />
        </Controls>
        <div>
          {Object.keys(instruments).map(instrument => {
            const beats = instruments[instrument].beats;
            return (
              <Instrument 
                selectedSound={instruments[instrument].sound}
                beats={beats}
                currentBeat={currentBeat}
                playing={playing}
                mode={mode}
                sounds={player.sounds.filter(sound => sound.includes(instrument))}
                onToggleBeat={index => {
                  const newBeats = [...beats];
                  newBeats[index] = !beats[index];
                  setInstruments({
                    ...instruments,
                    [instrument]: {
                      ...instruments[instrument],
                      beats: newBeats
                    }
                  })
                }}
                onChangeSound={newSound => {
                  setInstruments({
                    ...instruments,
                    [instrument]: {
                      ...instruments[instrument],
                      sound: newSound
                    }
                  })
                }} 
              />
            )
          })}
        </div>
        <PlayStop onClick={() => setPlaying(!playing)} playing={playing} />
        <div>VIEW CODE ON <a href="#"><Icon src={Github}/></a></div>
        <div>VIEW ME ON <a href="#"><Icon src={Linkedin} /></a></div>
        <Footer>&copy; OMRI KOCHAVI 2019</Footer>
      </StyledApp>
  );
}

export default App;
