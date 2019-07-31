import { connect } from 'react-redux';

import { getInstrument } from '../core/selectors/instrumentSelectors';
import {
  getCurrentBeat,
  getPlaying,
  getMode
} from '../core/selectors/playerSelectors';
import { changeSound, toggleBeat } from '../core/actions/instrumentsActions';
import { instrumentsBank } from '../core/constants/instrumentsConstants';

import InstrumentComponent from '../components/InstrumentComponent';

const mapStateToProps = (state, ownProps) => {
  const { instrumentName } = ownProps;
  const instrument = getInstrument(state, ownProps.instrumentName);

  return {
    selectedSound: instrument.sound,
    beats: instrument.beats,
    currentBeat: getCurrentBeat(state),
    playing: getPlaying(state),
    mode: getMode(state),
    sounds: Object.keys(instrumentsBank).filter(sound => sound.includes(instrumentName))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleBeat: beat => dispatch(toggleBeat(ownProps.instrumentName, beat)),
  onChangeSound: sound => dispatch(changeSound(ownProps.instrumentName, sound))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstrumentComponent);
