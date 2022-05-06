import { useState } from 'react';

function useToggle( initialVal = false ) {
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state)
    }
    return [state, toggle]
}

function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = event => {
        setValue(event.target.value)
    };
    const reset = () => {
        setValue("")
    };
    return [value, handleChange, reset];
}


export { useToggle, useInputState }