import React, {useState, useEffect, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Quiz() {
	const navigate = useNavigate()
    const [question, setQuestion] = useState('')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [heroHP, setHeroHP] = useState(0)
	const [heroGIF, setHeroGIF] = useState(null)
	const [monsterGIF, setMonsterGIF] = useState(null)
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
			scrollToBottom()
			setHeroGIF(heroAttack)
			setMonsterGIF(monsterHurt)
			setTimeout(() => setMonsterGIF(monsterIdle), 600)
			if (heroHP >= 2) {
				setTimeout(() => setHeroGIF(heroStun), 600)
				setTimeout(() => setHeroGIF(heroStun2), 600)
			} else {
				setTimeout(() => setHeroGIF(heroIdle), 600)
			}
		} else {
			textGame.push(damageText[Math.floor(Math.random() * battleText.length)])
			scrollToBottom()
			setHeroHP(heroHP + 1)
			setMonsterGIF(monsterAttack)
			setHeroGIF(heroHurt)
			setTimeout(() => setMonsterGIF(monsterIdle), 500)
			if (heroHP >= 2) {
				setTimeout(() => setHeroGIF(heroStun), 600)
				setTimeout(() => setHeroGIF(heroStun2), 600)
			} else {
				setTimeout(() => setHeroGIF(heroIdle), 500)
			}
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < question.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const messagesEndRef = useRef(null)

	const scrollToBottom = () => {
	  messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
	}
  

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
	// const heroIdle = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648742687/Idle_pzfn7b.gif'
	const heroIdle = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648742687/Idle_pzfn7b.gif'
	const heroAttack = 'https://res.cloudinary.com/dhaek7qxl/image/upload/v1648757300/Attack01_uanris.gif'
	const heroHurt = 'https://res.cloudinary.com/dhaek7qxl/image/upload/v1648758254/hurt_mptpmj.gif'
	const heroStun = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743666/stun_cxd9hr.gif'
	const heroStun2 = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648759059/Webp.net-gifmaker_ppwpib.gif'
	const heroDead = 'https://res.cloudinary.com/dhaek7qxl/image/upload/v1648743773/Die_ylihnn.gif'
	const monsterIdle = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648742805/Idle_usqkdw.gif'
	const monsterAttack = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743884/Attack_n1z9wv.gif'
	const monsterHurt = 'https://res.cloudinary.com/dhaek7qxl/image/upload/e_loop/v1648743943/Hurt_uxk2kw.gif'
	const monsterDead = 'https://res.cloudinary.com/dhaek7qxl/image/upload/v1648744027/Die_qxjavx.gif'


	return (
		<>
			<div className='container mt-5'>

				{question ? showScore ? (
					<div className='score-section col'>
						<div className='row'>
							<div className='col'>
								<p style={{color: '#F1D00A'}}>You scored {score} out of {question.length}</p>
								{updateScore()}
								{score >= 4 ?  <p style={{color: '#F1D00A'}}>Hooray! You have vanquished the foul beast!</p> : <p style={{color: '#F1D00A'}}>Barely got out alive on that one, better sharpen my skills and try again!</p>}
							</div>
							<div>
								<button className='diff-btn' onClick={goHome}>Home</button>
							</div>
						</div>
						<div>
							{score >= 4 ? <img src={monsterDead}/> : <img src={heroDead}/>}
						</div>
					</div>
				) : (
				<>
					<div className='row' align='center'>
						<div className='col' align='right'>
							<div className='hero-cage' >
							{heroGIF ? <img src={heroGIF} style={{"height": "100%", "width": "100%"}}/> :<img src={heroIdle} style={{"height": "100%", "width": "100%"}}/>}
							</div>
						</div>
						<div className='col' align='left'>
							<div className='hero-cage'>
							{monsterGIF ? <img src={monsterGIF} style={{"height": "100%", "width": "100%"}}/> : <img src={monsterIdle} style={{"height": "100%", "width": "100%"}}/>}
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='app question-section container ' align='center'>
							<div className='row' style={{"width": "100%"}}>
								<div className='col'>
									<div className='question-count row mt-2'>
										<h2>Question {currentQuestion + 1} of {question.length}</h2>
									</div>
									<div className='question-text row' align={"left"}>
										<h4>{question[currentQuestion].question}</h4>
									</div>
								</div>
								<div className='col'>
									<div className='answer-section'>
										{question[currentQuestion].answers.map((answer) => (
										<div className='my-2' alignContent={"left"}>
											<button className='my-button' onClick={() => handleAnswerOptionClick(answer)}>{answer.answer}</button>
										</div>
										))}
									</div>
								</div>	
							</div>	
						</div>
					</div>
					
				</>	) : <></> }
			</div>
			<div className='text-game mt-3 mb-'>
				<div className='col px-3 pt-3 pb-1' style={{background:'white'}}>
					<p>Hurry! Use your skills to defeat the Monster!</p>
						{textGame.map(e => {
							return <p>{e}</p>
						})} 
				<div ref={messagesEndRef}/>		
				</div>
			</div>
		</>
	);
}

export default Quiz