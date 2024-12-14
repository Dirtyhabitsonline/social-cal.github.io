import React from 'react';
import { SettingsToggle } from './SettingsToggle';
import { useSettings } from '../../hooks/settings/useSettings';

export function SettingsPanel() {
  const { settings, updateSetting } = useSettings();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      
      <div className="space-y-4">
        <SettingsToggle
          label="Dark Theme"
          checked={settings.theme === 'dark'}
          onChange={(checked) => updateSetting('theme', checked ? 'dark' : 'light')}
        />
        
        <SettingsToggle
          label="Enable Notifications"
          checked={settings.notifications}
          onChange={(checked) => updateSetting('notifications', checked)}
        />
      </div>
    </div>
  );
}