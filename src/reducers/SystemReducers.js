import { fromJS } from 'immutable';
import { ActionTypes } from '../constants/SystemConstants';

const defaultState = fromJS({
  windowIsMaximized: true,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_WINDOW_MAXIMIZED_STATUS:
      return state.merge({
        windowIsMaximized: action.isMaximized,
      });
    default:
      break;
  }
  return state;
};
