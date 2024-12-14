import { useState, useCallback } from 'react';

interface Toast {
  title: string;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Toast) => {
    setToasts(prev => [...prev, toast]);
    setTimeout(() => {
      setToasts(prev => prev.slice(1));
    }, 3000);
  }, []);

  return { toasts, showToast };
}