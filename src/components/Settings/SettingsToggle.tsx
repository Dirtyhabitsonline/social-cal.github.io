import React from 'react';

interface SettingsToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function SettingsToggle({ label, checked, onChange }: SettingsToggleProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded"
      />
      <span>{label}</span>
    </label>
  );
}