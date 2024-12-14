import { useEffect, useCallback } from 'react';
import { useToast } from '../ui/useToast';

export function useAutoUpdater() {
  const { showToast } = useToast();

  const handleUpdateAvailable = useCallback(() => {
    showToast({
      title: 'Update Available',
      message: 'A new version is available and will be downloaded automatically.',
      type: 'info'
    });
  }, [showToast]);

  const handleUpdateReady = useCallback(() => {
    showToast({
      title: 'Update Ready',
      message: 'The update has been downloaded and will be installed on restart.',
      type: 'success'
    });
  }, [showToast]);

  useEffect(() => {
    window.electron.updates.onUpdateAvailable(handleUpdateAvailable);
    window.electron.updates.onUpdateReady(handleUpdateReady);
  }, [handleUpdateAvailable, handleUpdateReady]);
}