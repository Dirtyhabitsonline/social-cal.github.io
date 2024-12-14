import React from 'react';
import { Check } from 'lucide-react';

interface PublishStatusProps {
  wp: boolean;
  mailchimp: boolean;
}

export function PublishStatus({ wp, mailchimp }: PublishStatusProps) {
  return (
    <div className="flex space-x-4">
      <StatusIndicator label="WordPress" isPublished={wp} />
      <StatusIndicator label="Mailchimp" isPublished={mailchimp} />
    </div>
  );
}

interface StatusIndicatorProps {
  label: string;
  isPublished: boolean;
}

function StatusIndicator({ label, isPublished }: StatusIndicatorProps) {
  return (
    <div className="flex items-center">
      <Check 
        className={`w-4 h-4 mr-1 transition-colors ${
          isPublished ? 'text-green-500' : 'text-gray-400'
        }`} 
      />
      <span className="text-sm">{label}</span>
    </div>
  );
}