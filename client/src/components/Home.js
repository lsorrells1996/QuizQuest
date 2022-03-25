import React from 'react'
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar'

function Home( {setUser, user} ) {
    const navigate = useNavigate()


    return (
        <>
            <NavBar setUser={setUser} user={user}/>
            <h1></h1>
        </>
    )

}

export default Home