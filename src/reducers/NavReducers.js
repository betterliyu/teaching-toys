import { fromJS } from 'immutable';
import NavActionTypes from '../actions/NavActionTypes';

const defaultState = fromJS({
  selectedKey: 2,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case NavActionTypes.CHANGE_SELECTEDKEY:
      return state.merge({
        selectedKey: action.selectedKey,
      });
    default:
      break;
  }
  return state;
};
