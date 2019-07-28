export const SET_TEMPO = 'playerActions/SET_TEMPO';
export const SET_VOLUME = 'playerActions/SET_VOLUME';
export const SET_MODE = 'playerActions/SET_MODE';
export const SET_CURRENT_BEAT = 'playerActions/SET_CURRENT_BEAT';
export const TOGGLE_PLAYING = 'playerActions/TOGGLE_PLAYING';

export function setTempo(tempo) {
    return {
        type: SET_TEMPO,
        tempo
    }
}

export function setVolume(volume) {
    return {
        type: SET_VOLUME,
        volume
    }
}

export function setMode(mode, bars) {
    return {
        type: SET_MODE,
        mode, 
        bars
    }
}

export function setCurrentBeat(currentBeat) {
    return {
        type: SET_CURRENT_BEAT,
        currentBeat
    }
}

export function togglePlaying() {
    return {
        type: TOGGLE_PLAYING
    }
}