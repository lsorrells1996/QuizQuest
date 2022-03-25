import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"

function Landing({setUser, user}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [createUsername, setCreateUsername] = useState('')
    const [createPassword, setCreatePassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const onLogin = e => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user))
                navigate('/home')
            }
        })
    }
 
    const onSignup = e => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: createUsername,
                email,
                password: createPassword,
                password_confirmation: passwordConfirmation
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(user => setUser(user))
                navigate('/home')
            }
        })
    }

    return (
    <div className='container'>
        <div align='center' className='my-5'>
            <h1>Welcome to Quiz Town! Log your ass in...</h1>
        </div>
        <div className='col'>
            <form onSubmit={onLogin} align="center" className='container'>
                <div className='row'>
                    <label><div>Username</div>
                        <input className='mb-3 ms-3' onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username..."/>
                    </label>
                </div>
                <div className='row'>
                    <label><div>Password</div>
                        <input className='mb-4 ms-3' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..."/>
                    </label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
        <div className='col'>
            <form onSubmit={onSignup} align="center" className='container'>
                <div className='row'>
                    <label><div>Username</div>
                        <input className='mb-3 ms-3' onChange={(e) => setCreateUsername(e.target.value)} type="text" placeholder="Username..."/>
                    </label>
                </div>
                <div className='row'>
                    <label><div>Email</div>
                        <input className='mb-3 ms-3' onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username..."/>
                    </label>
                </div>
                <div className='row'>
                    <label><div>Password</div>
                        <input className='mb-3 ms-3' onChange={(e) => setCreatePassword(e.target.value)} type="password" placeholder="Username..."/>
                    </label>
                </div>
                <div className='row'>
                    <label><div>Confirm Password</div>
                        <input className='mb-4 ms-3' onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="Password..."/>
                    </label>
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    </div>
    )
}


export default Landing