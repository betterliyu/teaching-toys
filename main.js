const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow, ipcMain } = require('electron');

const development = process.env.NODE_ENV === 'development';

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      // 不能设为 false, 否则渲染进程中不能 require electron.
      // contextIsolation: true,
    },
  });
  if (development) {
    win.loadURL('http://localhost:9000');
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }

  win.webContents.send('window-mode-changed', win.isMaximized() ? 'Max' : 'Normal');
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
      e.reply('window-mode-changed', 'Normal');
    } else {
      win.maximize();
      e.reply('window-mode-changed', 'Max');
    }
  } else if (mode === 'Close') {
    win.close();
  }
});
