import { contextBridge } from 'electron';
import { storeApi } from './api/store';
import { updatesApi } from './api/updates';

contextBridge.exposeInMainWorld('electron', {
  store: storeApi,
  updates: updatesApi,
});