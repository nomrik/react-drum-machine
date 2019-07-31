import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Instrument from './containers/InstrumentContainer';
import Player from './containers/PlayerContainer';
import Github from './icons/github.png';
import Linkedin from './icons/linkedin.svg';

import Controls from './containers/ControlsContainer';

import colors from './colors';
import Icon from './components/Icon';

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
`;

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
`;

const Footer = styled.div`
  margin-top: auto;
  font-size: 10px;
`;

function App({ instruments, onKeyDown}) {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return function cleanup() {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
  return (
    <StyledApp>
      <GlobalStyle />
      <Controls />
      <div>
        {Object.keys(instruments).map(instrumentName => {
          return <Instrument key={instrumentName} instrumentName={instrumentName} />;
        })}
      </div>
      <Player />
      <div>
        VIEW CODE ON{' '}
        <a
          href="https://github.com/nomrik"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon src={Github} />
        </a>
      </div>
      <div>
        VIEW ME ON{' '}
        <a
          href="https://www.linkedin.com/in/omri-kochavi-b924b0124/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon src={Linkedin} />
        </a>
      </div>
      <Footer>&copy; OMRI KOCHAVI 2019</Footer>
    </StyledApp>
  );
}

export default App;
