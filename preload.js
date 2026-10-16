const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  toggleMiniMode: () => ipcRenderer.send('toggle-mini-mode'),
  onMiniModeChanged: (callback) => ipcRenderer.on('mini-mode-changed', (event, isMini) => callback(isMini)),
  showNotification: (title, body) => ipcRenderer.send('show-native-notification', { title, body }),
  setLaunchOnStartup: (enabled) => ipcRenderer.send('set-launch-on-startup', enabled),
  onGlobalHotkey: (callback) => ipcRenderer.on('global-hotkey', (event, action) => callback(action))
});
