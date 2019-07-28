import {
    SET_TEMPO,
    SET_VOLUME,
    SET_MODE,
    SET_CURRENT_BEAT,
    TOGGLE_PLAYING,
} from '../actions/playerActions';

const initialState = {
    tempo: 100,
    volume: 1,
    mode: 4,
    bars: 1,
    currentBeat: 0,
    playing: false
}

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TEMPO:
            return {
                ...state,
                tempo: action.tempo
            }
        case SET_VOLUME:
            return {
                ...state,
                volume: action.volume
            }
        case SET_MODE:
            return {
                ...state,
                mode: action.mode
            }
        case SET_CURRENT_BEAT:
            return {
                ...state,
                currentBeat: action.currentBeat
            }
        case TOGGLE_PLAYING:
            return {
                ...state,
                playing: !state.playing
            }
        default:
            return state;
    }
}