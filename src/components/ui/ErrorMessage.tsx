import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-center text-red-500 p-4">
      {message}
    </div>
  );
}