import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  store: {
    get: (key: string) => ipcRenderer.invoke('store:get', key),
    set: (key: string, value: any) => ipcRenderer.invoke('store:set', key, value),
  },
  updates: {
    onUpdateAvailable: (callback: () => void) => {
      ipcRenderer.on('update:available', callback);
    },
    onUpdateReady: (callback: () => void) => {
      ipcRenderer.on('update:ready', callback);
    },
  },
});