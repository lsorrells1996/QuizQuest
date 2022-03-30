import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function Profile({setUser, user}) {
    const [updatedUsername, setUpdatedUsername] = useState('')
    const [updatedPassword, setUpdatedPassword] = useState('')
    const [updatedPasswordConfirmation, setUpdatedPasswordConfirmation] = useState('')
    const [showUsernameForm, setShowUsernameForm] = useState(false)
    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const navigate = useNavigate()

    const onUsernameUpdate = e => {
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

    const onPasswordUpdate = e => {
        e.preventDefault()
        fetch('/update_password', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: updatedPassword,
                password_confirmation: updatedPasswordConfirmation
            })
        }).then(r => {
            if (r.ok) {
                setUser(null)
                navigate('/')
                alert('Please re-login! :)')
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
    
    const toggleUsernameForm = () => {
        setShowUsernameForm(!showUsernameForm)
        if (showPasswordForm === true) {
            setShowPasswordForm(!showPasswordForm)
        }
    }

    const togglePasswordForm = () => {
        setShowPasswordForm(!showPasswordForm)
        if (showUsernameForm === true) {
            setShowUsernameForm(!showUsernameForm)
        }
    }

    
    return (
    <>
        <NavBar user={user} setUser={setUser}/>
        {user ? <h1>Hello {`${user.username}!`}</h1> : <></> }
        <div className='col'>
            <h3>Would you like to update...</h3>
            <button className="btn btn-primary mb-3 ms-3" onClick={toggleUsernameForm}>Username?</button>
            <button className="btn btn-primary mb-3 ms-3"onClick={togglePasswordForm}>Password?</button>
            {showPasswordForm ? <form onSubmit={onPasswordUpdate} align="center" className='container'>
                <div className='row'>
                    <label><div>New Password</div>
                        <input className='mb-3 ms-3' onChange={(e) => setUpdatedPassword(e.target.value)} type="password" placeholder="Password..."/>
                    </label>
                    <label><div>Confirm New Password</div>
                        <input className='mb-3 ms-3' onChange={(e) => setUpdatedPasswordConfirmation(e.target.value)} type="password" placeholder="Confirm Password..."/>
                    </label>
                </div>
                <div>
                    <button className="btn btn-primary mb-3 ms-3" type="submit">Update Password</button>
                </div>
            </form> : null}
            {showUsernameForm ? <form onSubmit={onUsernameUpdate} align="center" className='container'>
                <div className='row'>
                    <label><div>New Username</div>
                        <input className='mb-3 ms-3' onChange={(e) => setUpdatedUsername(e.target.value)} type="text" placeholder="Username..."/>
                    </label>
                </div>
                <div>
                    <button className="btn btn-primary mb-3 ms-3" type="submit">Update Username</button>
                </div>
            </form> : null}
            <h3>Would you like to delete your account?</h3>
            <div>
                <button className="btn btn-danger mb-3 ms-3" type="button" onClick={handleAccountDelete}>Delete Account</button>
            </div>
        </div>
    </>
    )
}

export default Profile