import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultValue) {
    // make piece of state, based off of value in local storage
    // or if none, use initialValue
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(
            window.localStorage.getItem(key) || String(defaultValue));
        }
        catch (e) {
            val = defaultValue;
        }
        return val;
    });

    // set value in local storage whenever value changes
    // use useEffect to update localStorage when value changes
    useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

  return [state, setState];
}

export { useLocalStorageState };