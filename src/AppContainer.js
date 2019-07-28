import { connect } from 'react-redux';
import { 
    getTempo,
    getVolume,
    getMode,
    getCurrentBeat,
    getBars,
    getPlaying
} from './core/selectors/playerSelectors';
import { setCurrentBeat } from './core/actions/playerActions'
import {
    getInstruments
} from './core/selectors/instrumentSelectors';

import App from './App';

const mapStateToProps = state => ({
    tempo: getTempo(state),
    volume: getVolume(state),
    mode: getMode(state),
    bars: getBars(state),
    playing: getPlaying(state),
    instruments: getInstruments(state),
    currentBeat: getCurrentBeat(state)
})

export const mapDispatchToProps = dispatch => ({
    onSetCurrentBeat: beat => dispatch(setCurrentBeat(beat))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);