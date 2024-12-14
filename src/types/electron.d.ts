export interface ElectronAPI {
  store: {
    get: (key: string) => Promise<any>;
    set: (key: string, value: any) => Promise<void>;
  };
  updates: {
    onUpdateAvailable: (callback: () => void) => void;
    onUpdateReady: (callback: () => void) => void;
  };
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}