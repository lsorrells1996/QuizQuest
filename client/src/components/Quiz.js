import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Quiz() {
	const navigate = useNavigate()
    const [question, setQuestion] = useState('')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [finalScore, setFinalScore] = useState(0)
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

	const updateScore = () => {
		fetch('/score', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				score
			})
		}).then(r => {
			if (r.ok) {
				r.json().then(data => setFinalScore(data))
			}
		})
	}

	return (
		<div className='app'>
			{question ? showScore ? (
				<div className='score-section'>
					You scored {score} out of {question.length}
					{updateScore()}
                    <button onClick={goHome}>Home</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{question.length}
						</div>
						<div className='question-text'>{question[currentQuestion].question}</div>
					</div>
				
					<div className='answer-section'>
						{question[currentQuestion].answers.map((answer) => (
							<button onClick={() => handleAnswerOptionClick(answer)}>{answer.answer}</button>
						))}
					</div> 
				</>
			) : <></> }
		</div>
	);
}

export default Quiz