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
    <nav className="navbar" style={{backgroundColor: "#3a3d42"}}>
        <ul className="nav">
            <li className='nav-item'>
                <a className="navbar-brand" href="/home">
                <img src="https://res.cloudinary.com/dhaek7qxl/image/upload/v1648183355/Book-icon_anzcyj.jpg" alt="" width="30" height="24" className='mx-2'></img>
                {user ? `Welcome to QuizTown, ${user.username}` : 'Welcome to QuizTown' }
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/profile">
                  <img src='https://res.cloudinary.com/dhaek7qxl/image/upload/v1648676854/171-1712282_profile-icon-png-profile-icon-vector-png-transparent-removebg-preview_cjzaur.png'></img>
                </a>
            </li>
        </ul>
        <a onClick={onLogout} className="btn btn-primary me-5">Logout</a>
    </nav>
  )
}

export default NavBar