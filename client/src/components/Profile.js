import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function Profile({setUser, user}) {
    const [updatedUsername, setUpdatedUsername] = useState('')
    // const [updatedPassword, setUpdatedPassword] = useState('')
    // const [updatedPasswordConfirmation, setUpdatedPasswordConfirmation] = useState('')
    const navigate = useNavigate()

    const onUpdate = e => {
        e.preventDefault()
        fetch('/users/:id', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: updatedUsername,
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(updatedUser => setUser(updatedUser))
                navigate(0)
            }
        })
    }

    const handleAccountDelete = () => {
        fetch('/users/:id', {
            method: 'DELETE'
        }).then(r => {
            if (r.ok) {
                setUser(null)
                navigate('/')
            }
        })
    }

    
    return (
    <>
        <NavBar/>
        {user ? <h1>Hello {`${user.username}`}</h1> : <></> }
        <div className='col'>
            <form onSubmit={onUpdate} align="center" className='container'>
                <div className='row'>
                    <label><div>Username</div>
                        <input className='mb-3 ms-3' onChange={(e) => setUpdatedUsername(e.target.value)} type="text" placeholder="Username..."/>
                    </label>
                </div>
                <div>
                    <button className='mb-3 ms-3' type="submit">Update</button>
                </div>
                <div>
                    <button className='mb-3 ms-3' type="button" onClick={handleAccountDelete}>Delete Account</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Profile