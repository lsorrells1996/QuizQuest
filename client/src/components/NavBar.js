import React from 'react'
import { useNavigate } from "react-router-dom"

function NavBar({setUser, user}) {
    const navigate = useNavigate()

    const onLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
        navigate('/')
      }
    })
  }
    
    return (
    <nav className="navbar navbar-light bg-secondary">
        <ul className="nav">
            <li className='nav-item'>
                <a className="navbar-brand" href="/home">
                <img src="https://res.cloudinary.com/dhaek7qxl/image/upload/v1648183355/Book-icon_anzcyj.jpg" alt="" width="30" height="24" className='mx-2'></img>
                {user ? `Welcome to QuizTown, ${user.username}` : 'Welcome to QuizTown' }
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link link-dark" href="/profile">Profile</a>
            </li>
        </ul>
        <button onClick={onLogout} className="me-5">Logout</button>
    </nav>
  )
}

export default NavBar