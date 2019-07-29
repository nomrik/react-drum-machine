export const getInstruments = state => state.instruments;
export const getInstrumentsNames = state => Object.keys(state.instruments);
export const getInstrument = (state, instrumentName) => getInstruments(state)[instrumentName];