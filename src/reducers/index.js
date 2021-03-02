import { combineReducers } from 'redux-immutable';
import NavReducers from './NavReducers';
import SystemReducers from './SystemReducers';

const reduce = combineReducers({
  System: SystemReducers,
  Nav: NavReducers,
});

export default reduce;
