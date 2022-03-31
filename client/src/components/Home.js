import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import QuizCard from './QuizCard'

function Home( {setUser, user} ) {
    const [quizzes, setQuizzes] = useState([])
    const [userData, setUserData] = useState(null)
    const [allData, setAllData] = useState(null)

    useEffect(() => {
        let myfetches = []

        myfetches.push(fetch('/quizzes').then(r => {
            if (r.ok) {
                r.json().then(q => setQuizzes(q))
            }
        }))
        myfetches.push(fetch('/current').then(r => {
            if (r.ok) {
                r.json().then(r => setUserData(r))
            }
        myfetches.push(fetch('/all').then(r => {
            if (r.ok) {
                r.json().then(r => setAllData(r))
            }
        }))
        }))

        Promise.all(myfetches)

    }, [])

    console.log(quizzes)
    console.log(userData) 
    console.log(allData)
    // useEffect(() => {
    //     fetch('/quizzes').then(r => {
    //         if (r.ok) {
    //             r.json().then(q => setQuizzes(q))
    //         }
    //     })
    // }, [])


    return (
        <>
            <NavBar setUser={setUser} user={user}/>
            <div className='container'>
                <div className='row'>
                    <div className='col mt-5' align='center'>
                        <div className="other" align='center' style={{ maxWidth: '500px', minHeight: '500px' }}>
                            <h5 className="card-header">{user ? `${user.username}'s Stats!` : <></>}</h5>
                            <div className="card-body">
                                <h5 className="card-title my-3">Math</h5>
                                <p className="card-text my-2">{userData ? `Your best score in Math is ${(userData.highest_math_score/5)*100}%`: <></>}</p>
                                <h5 className="card-title my-3">Science</h5>
                                <p className="card-text my-2">{userData ? `Your best score in Math is ${(userData.highest_science_score/5)*100}%`: <></>}</p>
                                <h5 className="card-title my-3">History</h5>
                                <p className="card-text my-2">{userData ? `Your best score in Math is ${(userData.highest_history_score/5)*100}%`: <></>}</p>
                                <h5 className="card-title my-3">Programming</h5>
                                <p className="card-text my-2">{userData ? `Your best score in Math is ${(userData.highest_programming_score/5)*100}%`: <></>}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    {quizzes.map( q => {
                        return <QuizCard key={q.id} id={q.id} topic={q.topic} title={q.title} user={user} />
                    })}
                    </div>
                    <div className='col mt-5'>
                        <div className="other" align='center' style={{ maxWidth: '500px', minHeight: '500px' }}>
                            <h5 className="card-header">Leaderboard!</h5>
                            <div className="card-body">
                                <h5 className="card-title my-3">Math</h5>
                                    <p className="card-text my-2">{allData ? `${allData.highest_math_user} has the best score in Math with a ${(allData.math_high_score/5)*100}%`: <></>}</p>
                                <h5 className="card-title my-3">Science</h5>
                                <p className="card-text my-2">{allData ? `${allData.highest_science_user} has the best score in Math with a ${(allData.science_high_score/5)*100}%`: <></>}</p>
                                <h5 className="card-title my-3">History</h5>
                                <p className="card-text my-2">{allData ? `${allData.highest_history_user} has the best score in Math with a ${(allData.history_high_score/5)*100}%`: <></>}</p>
                                <h5 className="card-title my-3">Programming</h5>
                                <p className="card-text my-2">{allData ? `${allData.highest_programming_user} has the best score in Math with a ${(allData.programming_high_score/5)*100}%`: <></>}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default Home