import {useState} from 'react'

function useCounter(iniccialCount = 0,value) {
    const [count,setCount] = useState(iniccialCount)

    const increment = () => {
        setCount(prevState => prevState + value)
    }

    const decrement = () => {
        setCount(prevState => prevState - value)
    }

    const reset = () =>{
        setCount(iniccialCount)
    }

    return [count,increment,decrement,reset]
}

export default useCounter
