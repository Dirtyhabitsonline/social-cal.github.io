import { useEffect } from 'react';

export function useAutoUpdater() {
  useEffect(() => {
    window.electron.updates.onUpdateAvailable(() => {
      console.log('A new update is available');
      // You can show a notification to the user here
    });

    window.electron.updates.onUpdateReady(() => {
      console.log('Update has been downloaded and is ready to install');
      // You can prompt the user to restart the app here
    });
  }, []);
}