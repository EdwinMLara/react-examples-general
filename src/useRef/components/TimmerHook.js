import React,{useState,useEffect,useRef} from 'react'

function TimmerHook() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        },1000)
        return () =>{
            clearInterval(intervalRef.current)
        }
    },[])

    return (
        <div>
            Hook timmer - {timer}
            <button onClick={ () => { clearInterval(intervalRef.current) }}>Clear Interval Hook</button>
        </div>
    )
}

export default TimmerHook
