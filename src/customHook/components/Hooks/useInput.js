import {useState} from 'react'

function useInput(inicialValue) {
    const [value, setValue] = useState(inicialValue)

    const reset = () =>{
        setValue(inicialValue)
    }

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value,bind,reset]
}

export default useInput
