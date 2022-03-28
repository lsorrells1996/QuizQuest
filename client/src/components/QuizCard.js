import React from 'react'

function QuizCard({ topic, title, id }) {

    return (
        <div className='container mt-5' align='center'>
            <div className="card" align='center' style={{ maxWidth: '500px' }}>
                <h5 className="card-header">{topic}</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <a href={`/quiz/${id}`} className="btn btn-primary">Quiz Me!</a>
            </div>
        </div>
    </div >
  )
}

export default QuizCard