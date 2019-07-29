export const CHANGE_SOUND = 'instrumentActions/CHANGE_SOUND';
export const TOGGLE_BEAT = 'instrumentsActions/TOGGLE_BEAT';

export function changeSound(instrument, sound) {
    return {
        type: CHANGE_SOUND,
        instrument,
        sound
    }
}

export function toggleBeat(instrument, beat) {
    return {
        type: TOGGLE_BEAT,
        instrument,
        beat
    }
}