import { ActionTypes, DisplayMode } from '../constants/SystemConstants';
import store from '../stores/index';

const { ipcRenderer } = require('electron');

const changeWindowMaximizedStatus = (isMaximized) => ({
  type: ActionTypes.CHANGE_WINDOW_MAXIMIZED_STATUS,
  isMaximized,
});

ipcRenderer.on('window-is-maximized', (e, isMaximized) => {
  store.dispatch(changeWindowMaximizedStatus(isMaximized));
});

export const changeWindowSize = (type) => () => {
  if (type === DisplayMode.Min) {
    ipcRenderer.send('change-window-mode', DisplayMode.Min);
  } else if (type === DisplayMode.Max) {
    ipcRenderer.send('change-window-mode', DisplayMode.Max);
  } else if (type === DisplayMode.Close) {
    ipcRenderer.send('change-window-mode', DisplayMode.Close);
  }
};

export default {};
