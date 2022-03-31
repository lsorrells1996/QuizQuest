import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Quiz() {
	const navigate = useNavigate()
    const [question, setQuestion] = useState('')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [finalScore, setFinalScore] = useState(0)
	const [textGame, setTextGame] = useState([])
	let params = useParams()

	useEffect(() => {
		fetch(`/quizzes/${params.id}`)
			.then(r => r.json())
			.then(r => setQuestion(r.questions))
	}, [])

	const battleText = ['You cast Fireball! It\'s a direct hit!', "Your Kamehameha is super effective!", "You dodge a swipe from the Monster and counter with your own UpSmash!"]
	const damageText = ['The Monster sweeps your legs with it\'s slimy tail!', 'You managed to roll out of the way of the Monster\'s Acid Breath but some got on your shoulder. Ouch!', "The Monster charges you head on and rams its head into your ribcage!"]

	const handleAnswerOptionClick = (answer) => {
		if (answer.correct === true) {
			setScore(score + 1);
			textGame.push(battleText[Math.floor(Math.random() * battleText.length)])
		} else {
			textGame.push(damageText[Math.floor(Math.random() * battleText.length)])
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
		console.log(score)
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
		<>
			<div className='app container mt-5'>
				{question ? showScore ? (
					<div className='score-section col'>
						<div className='row'>
							<div className='col'>
								<p>You scored {score} out of {question.length}</p>
								{updateScore()}
								{score >= 4 ?  <p>Hooray! You have vanquished the foul beast!</p> : <p>Barely got out alive on that one, better sharpen my skills and try again!</p>}
							</div>
						</div>
						<div className='row'>
							<div className='col'>
								<button onClick={goHome}>Home</button>
							</div>
						</div>
						
					</div>
				) : (
					
						
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
				) : <></> }
			</div>
			<div className='container mt-5'>
				<div className='other col px-3 pt-3 pb-1' style={{background:'white'}}>
					<p>Hurry! Use your skills to defeat the Monster!</p>
						{textGame.map(e => {
							return <p>{e}</p>
						})} 
				</div>
			</div>
		</>
	);
}

export default Quiz