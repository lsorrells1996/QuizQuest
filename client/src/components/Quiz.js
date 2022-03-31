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

	const heroIdle = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648742687/Idle_pzfn7b.gif'
	const heroAttack = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743353/Attack01_ze9j2x.gif'
	const heroStun = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743666/stun_cxd9hr.gif'
	const heroDead = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743773/Die_ylihnn.gif'
	const monsterIdle = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648742805/Idle_usqkdw.gif'
	const monsterAttack = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743884/Attack_n1z9wv.gif'
	const monsterHurt = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743943/Hurt_uxk2kw.gif'
	const monsterDead = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648744027/Die_qxjavx.gif'

	return (
		<>
			<div className='container mt-5'>

				{question ? showScore ? (
					<div className='app score-section col'>
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
				<>
					<div className='row' align='center'>
						<div className='col' align='center'>
							<img src={heroIdle}/>
						</div>
						<div className='col'>
							<img src={monsterIdle}/>
						</div>
					</div>
					<div className='row'>
						<div className='app question-section col' align='center'>
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
					</div>
					
				</>	) : <></> }
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