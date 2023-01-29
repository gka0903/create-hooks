import { useState } from 'react'

export const useInput = (initialValue, valid) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target : { value }
        } = e
        let WillUpdate = true;
        if (typeof(valid) === "function") {
            WillUpdate = valid(value)
        }
        if (WillUpdate === true) {
            setValue(value)
        }
    }
    return { value, onChange }
}
