import { combineReducers } from 'redux';

import playerReducer from './playerReducer';
import instrumentsReducer from './instrumentsReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    instruments: instrumentsReducer
})

export default rootReducer;