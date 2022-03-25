import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"


function Home( {setUser} ) {
    const navigate = useNavigate()

    const onLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => setUser(null))
        navigate('/')
    }

    return (
        <>
            <nav class="navbar navbar-light bg-secondary">
                <ul class="nav">
                    <li className='nav-item'>
                        <a class="navbar-brand" href="#">
                        <img src="https://res.cloudinary.com/dhaek7qxl/image/upload/v1648183355/Book-icon_anzcyj.jpg" alt="" width="30" height="24" className='mx-2'></img>
                        QuizTown
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-dark" href="#">Link</a>
                    </li>
                </ul>
                <button onClick={onLogout} className="me-5">Logout</button>
            </nav>
        </>
    )

}

export default Home