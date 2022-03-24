import React, {useState} from 'react'

function Landing() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [createUsername, setCreateUsername] = useState('')
    // const [createPassword, setCreatePassword] = useState('')
    // const [email, setEmail] = useState('')

    const onSubmit = e => {
        e.prevent.default()
        fetch('localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
        }).then(r => r.json()).then()
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Username
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username..."/>
            </label>
            <label>Password
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..."/>
            </label>
            <button type="submit">submit</button>
        </form>
    </div>
    )
}

export default Landing