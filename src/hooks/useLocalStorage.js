import { useState } from "react";

const useLocalStorage = (key, initValue) => {
    const [state, setState] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item
                ? JSON.parse(item)
                : initValue
        } catch (err) {
            console.log(err);
            return initValue
        }
    })
    const setItem = (value)=>{
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setState(value)
        } catch (err) {
            console.log(err);
        }
    }
    return [state,setItem]
}
export default useLocalStorage