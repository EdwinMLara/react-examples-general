import React, {useReducer} from 'react'

const inicialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return inicialState
        default:
            return state
    }
}

function CounterthreeR() {
    const [count, dispatch] = useReducer(reducer,inicialState)
    const [counttwo, dispatchtwo] = useReducer(reducer,inicialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}> Increment </button>
            <button onClick={() => dispatch('decrement')}> Decrement </button>
            <button onClick={() => dispatch('reset')}> Reset </button>
            <div>Count - {counttwo}</div>
            <button onClick={() => dispatchtwo('increment')}> Increment </button>
            <button onClick={() => dispatchtwo('decrement')}> Decrement </button>
            <button onClick={() => dispatchtwo('reset')}> Reset </button>
        </div>
    )
}

export default CounterthreeR;