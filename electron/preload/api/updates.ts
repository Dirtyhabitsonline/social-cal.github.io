import { ipcRenderer } from 'electron';

export const updatesApi = {
  onUpdateAvailable: (callback: () => void) => {
    ipcRenderer.on('update:available', callback);
  },
  onUpdateReady: (callback: () => void) => {
    ipcRenderer.on('update:ready', callback);
  },
};