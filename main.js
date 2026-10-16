const { app, BrowserWindow, ipcMain, globalShortcut, Notification } = require('electron');
const path = require('path');

let mainWindow;
let isMiniMode = false;
let normalBounds = { width: 1120, height: 760 };

if (process.platform === 'win32') {
  app.setAppUserModelId('com.zenith.focusos');
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 760,
    minWidth: 320,
    minHeight: 90,
    backgroundColor: '#050507',
    center: true,
    show: false,
    autoHideMenuBar: true,
    title: 'ZENITH',
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
}

function performMiniModeToggle(event) {
  if (!mainWindow) return;

  if (!isMiniMode) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    }
    normalBounds = mainWindow.getBounds();
    mainWindow.setMinimumSize(280, 70);
    mainWindow.setSize(360, 130);
    mainWindow.setAlwaysOnTop(true, 'floating');
    isMiniMode = true;
  } else {
    mainWindow.setAlwaysOnTop(false);
    mainWindow.setMinimumSize(600, 450);
    mainWindow.setBounds(normalBounds);
    isMiniMode = false;
  }

  if (event && event.reply) {
    event.reply('mini-mode-changed', isMiniMode);
  }
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.send('mini-mode-changed', isMiniMode);
  }
}

// IPC: Mini Mode
ipcMain.on('toggle-mini-mode', (event) => {
  performMiniModeToggle(event);
});

// IPC: Native Desktop Notification (Feature #6)
ipcMain.on('show-native-notification', (event, { title, body }) => {
  try {
    if (Notification.isSupported()) {
      const notif = new Notification({
        title: title || 'ZENITH Focus OS',
        body: body || '',
        icon: path.join(__dirname, 'assets', 'icon.ico')
      });
      notif.show();
    }
  } catch (err) {}
});

// IPC: Launch on Windows Startup (Feature #19)
ipcMain.on('set-launch-on-startup', (event, enabled) => {
  try {
    app.setLoginItemSettings({
      openAtLogin: Boolean(enabled),
      path: process.execPath,
      args: [__dirname]
    });
  } catch (err) {}
});

app.whenReady().then(() => {
  createWindow();

  // Feature #10: Global Keyboard Shortcuts
  try {
    globalShortcut.register('CommandOrControl+Shift+S', () => {
      if (mainWindow && mainWindow.webContents) {
        mainWindow.webContents.send('global-hotkey', 'toggle-timer');
      }
    });

    globalShortcut.register('CommandOrControl+Shift+B', () => {
      if (mainWindow && mainWindow.webContents) {
        mainWindow.webContents.send('global-hotkey', 'toggle-break');
      }
    });

    globalShortcut.register('CommandOrControl+Shift+M', () => {
      performMiniModeToggle(null);
    });
  } catch (err) {}

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
