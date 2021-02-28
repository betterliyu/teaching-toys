// import axios from 'axios';
import { fromJS } from 'immutable';
import NavActionTypes from './NavActionTypes';

const changeSelectedKey = (selectedKey) => ({
  type: NavActionTypes.CHANGE_SELECTEDKEY,
  selectedKey: fromJS(selectedKey),
});

// eslint-disable-next-line import/prefer-default-export
export const switchPage = (navItem) => (dispatch) => {
  dispatch(changeSelectedKey(navItem.key));
};
