import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
    // make piece of state, based off of value in local storage
    // or if none, use initialValue
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(
            window.localStorage.getItem(key) || String(defaultVal));
        }
        catch (e) {
            val = defaultVal;
        }
        return val;
    });
        // set value in local storage whenever value changes
        // use useEffect to update localStorage when value changes
        useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
        }, [state]);
  return [state, dispatch];
}

export { useLocalStorageReducer };