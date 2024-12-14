import React from 'react';
import { Toast } from './Toast';

interface ToastContainerProps {
  toasts: Array<{
    title: string;
    message: string;
    type: 'info' | 'success' | 'error' | 'warning';
  }>;
}

export function ToastContainer({ toasts }: ToastContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </div>
  );
}