import { connect } from 'react-redux';
import { getPlaying } from '../core/selectors/playerSelectors';
import { togglePlaying } from '../core/actions/playerActions';
import PlayStopComponent from '../components/PlayStopComponent';

const mapStateToProps = state => ({
  playing: getPlaying(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(togglePlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayStopComponent);
