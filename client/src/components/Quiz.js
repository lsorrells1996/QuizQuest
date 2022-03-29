import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Quiz() {
	const navigate = useNavigate()
    const [question, setQuestion] = useState(null)
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	let params = useParams()
	
    useEffect(() => {
        fetch(`/questions/${params.id}`).then(r => {
            if (r.ok) {
				console.log('fetch happening')
                r.json().then(data => setQuestion(data))
            } 
        })
		question ? fetch(`/answers/${question[currentQuestion].id}`).then(r => {
			if (r.ok) {
				console.log('this happened')
				r.json().then(data => setCorrectAnswer(data))
			}
		}) : console.log('meow')
    }, [])
	
	question ? console.log(question) : console.log('idk')
	const handleAnswerOptionClick = (answer) => {


		if (answer.correct === correctAnswer.correct) {
			setScore(score + 1);
			console.log('This was right')
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
		<div className='app'>
			{question ? showScore ? (
				<div className='score-section'>
					You scored {score} out of {question.length}
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