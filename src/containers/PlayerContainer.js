import { connect } from 'react-redux';
import { getPlaying, getTempo, getNumberOfBeats, getMode, getVolume } from '../core/selectors/playerSelectors';
import { getNotesByBeat } from '../core/selectors/instrumentSelectors';
import { togglePlaying, setCurrentBeat } from '../core/actions/playerActions';
import PlayerComponent from '../components/PlayerComponent';

const mapStateToProps = state => ({
  playing: getPlaying(state),
  tempo: getTempo(state),
  numberOfBeats: getNumberOfBeats(state),
  mode: getMode(state),
  notesByBeat: getNotesByBeat(state),
  volume: getVolume(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(togglePlaying()),
  onSetCurrentBeat: beat => dispatch(setCurrentBeat(beat))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerComponent);
