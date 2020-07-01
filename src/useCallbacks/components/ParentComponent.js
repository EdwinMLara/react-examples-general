import React,{useState} from 'react'
import Title from './Title'
import Count from './Count'
import Botton from './Botton'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = () => {
        setAge(age + 1)
    }

    const incrementSalary = () => {
        setSalary(salary + 1000)
    }
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
