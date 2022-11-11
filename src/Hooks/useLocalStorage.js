import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(initialValue, localStorageName) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageName)) ?? initialValue;
  });
  useEffect(() => {
    localStorage.setItem(localStorageName, JSON.stringify(state));
  }, [initialValue, state]);
  return [state, setState];
}
