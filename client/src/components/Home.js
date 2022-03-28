import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar'
import QuizCard from './QuizCard'

function Home( {setUser, user} ) {
    // const navigate = useNavigate()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch('/quizzes').then(r => {
            if (r.ok) {
                r.json().then(q => setQuizzes(q))
            }
        })
    }, [])

    return (
        <>
            <NavBar setUser={setUser} user={user}/>
            <div className='container'>
                {quizzes.map( q => {
                    return <QuizCard key={q.id} id={q.id} topic={q.topic} title={q.title} user={user} />
                })}
            </div>
            
        </>
    )

}

export default Home