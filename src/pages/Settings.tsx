import React from 'react';
import { SettingsPanel } from '@/components/settings';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <SettingsPanel />
    </div>
  );
}