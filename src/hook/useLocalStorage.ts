import { useState } from 'react';

const setStorageKey = (key: string): string => `@BancoInter${key}`;

type useLocalStorageReturn<T> = [T, (value: T) => void];

const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): useLocalStorageReturn<T> => {
  const [storedValue, setStorageValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(setStorageKey(key));
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // console.log(error);
      return null;
    }
  });

  const storeValue = (value: T): void => {
    setStorageValue(value);
    window.localStorage.setItem(setStorageKey(key), JSON.stringify(value));
  };

  return [storedValue, storeValue];
};

export default useLocalStorage;
