import { useEffect } from 'react';
import { useSettings } from '../settings/useSettings';
import { applyTheme } from '@/utils/theme';

export function useTheme() {
  const { settings } = useSettings();

  useEffect(() => {
    applyTheme(settings.theme);
  }, [settings.theme]);

  return settings.theme;
}