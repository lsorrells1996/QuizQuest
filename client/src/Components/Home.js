import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar'

function Home( {setUser} ) {
    const navigate = useNavigate()



    return (
        <>
            <NavBar setUser={setUser}/>
        </>
    )

}

export default Home