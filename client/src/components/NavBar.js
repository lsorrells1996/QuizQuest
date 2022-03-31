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
    <nav className="navbar" style={{backgroundColor: "#3E497A"}}>
        <ul className="nav">
            <li className='nav-item'>
                <a className="navbar-brand" href="/home">
                <img src="https://res.cloudinary.com/dhaek7qxl/image/upload/v1648750933/full_body01_blkrsp.png" alt="" width="70" height="60" className='mx-4 '/>
                {user ? `Welcome to Quiz Quest, ${user.username}!` : 'Welcome to Quiz Quest' }
                </a>
            </li>
        </ul>
        <div>
          <a className="navbar-brand" href="/profile">
              <img className='me-3' src='https://res.cloudinary.com/dhaek7qxl/image/upload/v1648750342/head02_u6vrmj.png' width="50px"/>
              {`Profile`}
          </a>
          <a onClick={onLogout} className="diff-btn me-5">Logout</a>
        </div>
    </nav>
  )
}

export default NavBar