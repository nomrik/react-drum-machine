import { connect } from 'react-redux';
import {
  getTempo,
  getVolume,
  getMode,
  getBars
} from '../core/selectors/playerSelectors';
import { setTempo, setVolume, setMode } from '../core/actions/playerActions';

import ControlsComponent from '../components/ControlsComponents';

const mapStateToProps = state => ({
  tempo: getTempo(state),
  volume: getVolume(state),
  mode: getMode(state),
  bars: getBars(state)
});

const mapDispatchToProps = dispatch => ({
  onSetTempo: tempo => dispatch(setTempo(tempo)),
  onSetVolume: volume => dispatch(setVolume(volume)),
  onSetMode: (mode, bars) => dispatch(setMode(mode, bars))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlsComponent);
