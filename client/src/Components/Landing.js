import React, {useState} from 'react'

function Landing({setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [createUsername, setCreateUsername] = useState('')
    // const [createPassword, setCreatePassword] = useState('')
    // const [passwordConfirmation, setPasswordConfirmation] = useState('')
    // const [email, setEmail] = useState('')

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
        }).then(r => r.json()).then(user => setUser(user))
    }

    const onLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => setUser(null))
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
                    {/* <button onClick={onLogout}>logout</button> */}
                </div>
            </form>
        </div>
    </div>
    )
}

export default Landing