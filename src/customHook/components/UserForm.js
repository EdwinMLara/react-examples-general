import React,{useState} from 'react'

function UserForm() {
    const [firstname,setFirsname] = useState('')
    const [lastname,setLastname] = useState('')

    const submitHandler =  e => {
        e.preventDefault();
        alert(`Hellos ${firstname} ${lastname}`);

    }
    return (
        <div>   
            <form onSubmit={submitHandler}>
                <div>
                    <label>Firsname</label>
                    <input value={firstname} onChange={e => setFirsname(e.target.valur)} type="text"/>
                </div>
                <div>
                    <label>Lastname</label>
                    <input value={lastname} onChange={e => setLastname(e.target.value)} type="text"/>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UserForm

