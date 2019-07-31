import { instrumentsBank } from '../constants/instrumentsConstants';
import { getNumberOfBeats } from './playerSelectors';

export const getInstruments = state => state.instruments;
export const getInstrumentsNames = state => Object.keys(state.instruments);
export const getInstrument = (state, instrumentName) => getInstruments(state)[instrumentName];

export const getNotesByBeat = state => {
    const instruments = getInstruments(state);
    const numberOfBeats = getNumberOfBeats(state);
    const instrumentsNames = getInstrumentsNames(state);
    return [...Array(numberOfBeats).keys()].map(beat => {
        let notes = [];
        instrumentsNames.forEach(instrumentName => {
            if (instruments[instrumentName].beats[beat]) {
                notes.push(instrumentsBank[instruments[instrumentName].sound].note)
            } 
        })
        return notes;
    })
}