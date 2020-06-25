import React, { Component, useState, useEffect } from 'react';

function HookcounterOneUseEffec(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log("Updating title");
        document.title = `You Clicked ${count} times`
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={e =>{setName(e.target.value)}}/>
            <button onClick={()=>setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default HookcounterOneUseEffec;