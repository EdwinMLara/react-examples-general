import React, {useReducer} from 'react'

const inicialState = {
    fisrstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, fisrstCounter: state.fisrstCounter + action.value}
        case 'decrement':
            return {...state, fisrstCounter: state.fisrstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return inicialState
        default:
            return state
    }
}

function CounterTwoR() {
    const [count, dispatch] = useReducer(reducer,inicialState)
    return (
        <div>
            <div>Count : {count.fisrstCounter}</div>
            <div>Count : {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}> Increment </button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}> Decrement </button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}> Increment by 5 </button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}> Decrement by 5</button>
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}> Increment </button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}> Decrement </button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}> Reset </button>
        </div>
    )
}

export default CounterTwoR;
