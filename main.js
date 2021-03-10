const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const {
  app, BrowserWindow, ipcMain, session,
} = require('electron');

const development = process.env.NODE_ENV === 'development';

let win = null;

const onWindowIsMaximizedChange = () => win.webContents.send('window-is-maximized', win.isMaximized());

function createWindow() {
  win = new BrowserWindow({
    show: false,
    width: 1200,
    height: 800,
    minWidth: 600,
    minHeight: 400,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      // 不能设为 true, 否则渲染进程中不能 require electron.
      contextIsolation: false,
    },
  });
  if (development) {
    const reactDevTool = path.join(
      process.env.LOCALAPPDATA,
      'Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.10.1_0'
    );
    const reduxDevTool = path.join(
      process.env.LOCALAPPDATA,
      'Google/Chrome/User Data/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0'
    );
    session.defaultSession.loadExtension(reactDevTool, { allowFileAccess: true });
    session.defaultSession.loadExtension(reduxDevTool, { allowFileAccess: true });
    win.loadURL('http://localhost:9000');
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }
  win.webContents.once('did-finish-load', onWindowIsMaximizedChange);
  win.once('ready-to-show', () => win.show());
  win.on('maximize', onWindowIsMaximizedChange);
  win.on('unmaximize', onWindowIsMaximizedChange);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('change-window-mode', (e, mode) => {
  if (mode === 'Min') {
    win.minimize();
  } else if (mode === 'Max') {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  } else if (mode === 'Close') {
    win.close();
  }
});
