import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key) {
    console.log("key:",key)
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return (storedValue && storedValue.length===0) ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
        console.log(value)
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}