import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function QuizCard({ topic, title, id, user }) {

    const [userQuiz, setUserQuiz] = useState([])
    const navigate = useNavigate()

    const createUserQuiz = () => {
        fetch('/user_quizzes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                quiz_id: id
            })
        }).then(r => {
            if (r.ok) {
                r.json().then(newUserQuiz => setUserQuiz(newUserQuiz))
                navigate(`/quizzes/${id}`)
            }
        })
    }

    return (
        <div className='container mt-5' align='center'>
            <div className="other" align='center' style={{ maxWidth: '500px' }}>
                <h5 className="card-header">{topic}</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <a onClick={createUserQuiz} className="btn btn-primary border border-dark" style={{background:'#3E497A'}}>Quiz Me!</a>
            </div>
        </div>
    </div >
  )
}

export default QuizCard