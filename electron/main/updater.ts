import { autoUpdater } from 'electron-updater';
import { BrowserWindow } from 'electron';

export class UpdateManager {
  constructor(private mainWindow: BrowserWindow) {
    this.setupUpdateEvents();
  }

  checkForUpdates(): void {
    autoUpdater.checkForUpdatesAndNotify();
  }

  private setupUpdateEvents(): void {
    autoUpdater.on('update-available', () => {
      this.mainWindow.webContents.send('update:available');
    });

    autoUpdater.on('update-downloaded', () => {
      this.mainWindow.webContents.send('update:ready');
    });
  }
}