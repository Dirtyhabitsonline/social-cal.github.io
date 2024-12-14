import Store from 'electron-store';
import { ipcMain } from 'electron';

export class StoreManager {
  private store: Store;

  constructor() {
    this.store = new Store();
    this.setupIpcHandlers();
  }

  private setupIpcHandlers(): void {
    ipcMain.handle('store:get', (_, key: string) => {
      return this.store.get(key);
    });

    ipcMain.handle('store:set', (_, key: string, value: any) => {
      this.store.set(key, value);
    });
  }
}