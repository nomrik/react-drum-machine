import { connect } from 'react-redux';
import { getInstruments } from './core/selectors/instrumentSelectors';
import { togglePlaying } from './core/actions/playerActions';

import App from './App';

const mapStateToProps = state => ({
  instruments: getInstruments(state),
});

const mapDispatchToProps = dispatch => ({
  onKeyDown: key => {
    if (key.code === 'Space') {
      dispatch(togglePlaying())
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
