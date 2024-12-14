import { useElectronStore } from '../electron/useElectronStore';
import { Settings } from '../../types/settings';

const DEFAULT_SETTINGS: Settings = {
  theme: 'light',
  notifications: true,
};

export function useSettings() {
  const { value: settings, setValue: setSettings, loading } = useElectronStore('settings', DEFAULT_SETTINGS);

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings({ ...settings, [key]: value });
  };

  return { settings, updateSetting, loading };
}