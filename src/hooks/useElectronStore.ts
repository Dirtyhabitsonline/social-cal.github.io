import { useState, useEffect } from 'react';

export function useElectronStore<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.electron.store.get(key).then((storedValue) => {
      if (storedValue !== undefined) {
        setValue(storedValue);
      }
      setLoading(false);
    });
  }, [key]);

  const updateValue = async (newValue: T) => {
    await window.electron.store.set(key, newValue);
    setValue(newValue);
  };

  return { value, setValue: updateValue, loading };
}