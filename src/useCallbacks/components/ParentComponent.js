import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Botton from './Botton'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1)
    },[salary])
    
    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Botton handleClick={incrementAge}>Increment Age</Botton>
            <Count text="Salary" count={salary}/>
            <Botton handleClick={incrementSalary}>Increment Salary</Botton>
        </div>
    )
}

export default ParentComponent
