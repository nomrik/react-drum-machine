import { combineReducers } from 'redux';
import { CHANGE_SOUND, TOGGLE_BEAT } from '../actions/instrumentsActions';
import { SET_MODE } from '../actions/playerActions';

function createInstrumentReducer(instrumentName) {
    return function(state = { sound: `${instrumentName}1`, beats: Array(16).fill(false) }, action) {
        switch (action.type) {
            case CHANGE_SOUND:
                if (action.instrument === instrumentName) {
                    return {
                        ...state,
                        sound: action.sound
                    }
                }
                return state;
            case TOGGLE_BEAT:
                if (action.instrument === instrumentName) {
                    const newBeats = [...state.beats];
                    newBeats[action.beat] = !state.beats[action.beat];
                    return {
                        ...state,
                        beats: newBeats
                    }
                }
                return state;
            case SET_MODE:
                const numberOfBeats = action.mode * (action.bars || 1) * 4;
                return {
                    ...state,
                    beats: Array(numberOfBeats).fill(false)
                }
            default:
                return state;
        }
    }
}


export default combineReducers({
    KICK: createInstrumentReducer('KICK'),
    SNARE: createInstrumentReducer('SNARE'),
    HIHAT: createInstrumentReducer('HIHAT'),
})
