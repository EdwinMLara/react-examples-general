import React, { Component, useState, useEffect } from 'react';

function HookcounterOneUseEffec(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `You Clicked ${count} times`
    })
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default HookcounterOneUseEffec;