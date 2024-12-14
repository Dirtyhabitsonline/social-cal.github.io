import React from 'react';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
}

export function Toast({ title, message, type }: ToastProps) {
  const bgColor = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500'
  }[type];

  return (
    <div className={`${bgColor} text-white p-4 rounded-lg shadow-lg`}>
      <h3 className="font-bold">{title}</h3>
      <p>{message}</p>
    </div>
  );
}