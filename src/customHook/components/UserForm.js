import React from 'react'
import useInput from './Hooks/useInput'

function UserForm() {

    const [firstname,bindFirstname,resetFirstname] = useInput('')
    const [lastname,bindLastname,resetLastname] = useInput('')

    const submitHandler =  e => {
        e.preventDefault();
        alert(`Hello ${firstname} ${lastname}`);
        resetFirstname()
        resetLastname()

    }
    return (
        <div>   
            <form onSubmit={submitHandler}>
                <div>
                    <label>Firsname</label>
                    <input {...bindFirstname} type="text"/>
                </div>
                <div>
                    <label>Lastname</label>
                    <input {...bindLastname} type="text"/>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UserForm

