import { app } from 'electron';
import { WindowManager } from './window';
import { StoreManager } from './store';
import { UpdateManager } from './updater';

class Application {
  private windowManager: WindowManager;
  private storeManager: StoreManager;
  private updateManager: UpdateManager | null = null;

  constructor() {
    this.windowManager = new WindowManager();
    this.storeManager = new StoreManager();
  }

  async init(): Promise<void> {
    await app.whenReady();
    
    const mainWindow = this.windowManager.createMainWindow();
    this.updateManager = new UpdateManager(mainWindow);
    
    this.setupAppEvents();
    this.updateManager.checkForUpdates();
  }

  private setupAppEvents(): void {
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (!this.windowManager.getMainWindow()) {
        this.windowManager.createMainWindow();
      }
    });
  }
}

const application = new Application();
application.init().catch(console.error);