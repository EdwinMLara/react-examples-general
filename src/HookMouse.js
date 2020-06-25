import React, {useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = e =>{
        console.log('Mouse movement')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() =>{
        console.log("useEffect is called");
        window.addEventListener('mousemove', logMousePosition)
    },[])
    return (
        <div>
            Hook: x - {x}, y - {y}  
        </div>
    )
}

export default HookMouse
