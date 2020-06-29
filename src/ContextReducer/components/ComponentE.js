import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {CountContext} from '../../App'
function ComponentE() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentE
            <button onClick={() => countContext.countDispatch('increment')}> Increment </button>
            <button onClick={() => countContext.countDispatch('decrement')}> Decrement </button>
            <button onClick={() => countContext.countDispatch('reset')}> Reset </button>
            <ComponentF/>
        </div>
    )
}

export default ComponentE
