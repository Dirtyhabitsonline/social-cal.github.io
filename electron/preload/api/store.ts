import { ipcRenderer } from 'electron';

export const storeApi = {
  get: (key: string) => ipcRenderer.invoke('store:get', key),
  set: (key: string, value: any) => ipcRenderer.invoke('store:set', key, value),
};