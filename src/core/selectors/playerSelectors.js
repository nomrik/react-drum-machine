export const getTempo = state => state.player.tempo;
export const getVolume = state => state.player.volume;
export const getMode = state => state.player.mode;
export const getBars = state => state.player.bars;
export const getCurrentBeat = state => state.player.currentBeat;
export const getPlaying = state => state.player.playing;

export const getNumberOfBeats = state => getMode(state) * getBars(state) * 4;