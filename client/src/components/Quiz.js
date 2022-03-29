import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Quiz() {
	const navigate = useNavigate()
    const [question, setQuestion] = useState('')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	let params = useParams()

	useEffect(() => {
		fetch(`/quizzes/${params.id}`)
			.then(r => r.json())
			.then(r => setQuestion(r.questions))
	}, [])

	const handleAnswerOptionClick = (answer) => {
		console.log(answer)
		if (answer.correct === true) {
			console.log(answer)
			setScore(score + 1);
		} else {
			console.log('this was wrong')
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < question.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    function goHome() {
        navigate('/home')
    }

	return (
		<div className='app container mt-5'>
			{question ? showScore ? (
				<div className='score-section col'>
					<div className='row'>
						<div className='col'>
							You scored {score} out of {question.length}
						</div>
					</div>
                    <div className='row'>
						<div className='col'>
							<button onClick={goHome}>Home</button>
						</div>
					</div>
					
				</div>
			) : (
				<>
					<div className='question-section' align='center'>
						<div className='question-count'>
							<h3>Question {currentQuestion + 1} of {question.length}</h3>
						</div>
						<div className='question-text'>{question[currentQuestion].question}
						</div>
					
				
					<div className='answer-section'>
						{question[currentQuestion].answers.map((answer) => (
							<div className='my-2'>
								<button className='my-button' onClick={() => handleAnswerOptionClick(answer)}>{answer.answer}</button>
							</div>
						))}
					</div> 
					</div>		
				</>
			) : <></> }
		</div>
	);
}

export default Quiz