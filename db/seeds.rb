User.all.destroy_all
UserQuiz.all.destroy_all
Quiz.all.destroy_all
Question.all.destroy_all
Answer.all.destroy_all

puts "👤 Seeding Users..."
5.times {
    User.create(
        username: Faker::Internet.username,
        email: Faker::Internet.email,
        password: Faker::Internet.password
    )
}

puts "🤔 Seeding Quizzes..."
Quiz.create(topic: "Math", title: "Addition")
Quiz.create(topic: "Science", title: "Photosynthesis")
Quiz.create(topic: "History", title: "World War II")
Quiz.create(topic: "Programming", title: "Ruby Methods")

puts "🤔 Seeding UserQuizzes..."
10.times {
    UserQuiz.create(
        quiz_id: Quiz.all.sample.id,
        user_id: User.all.sample.id
    )
}

puts "❓ Seeding Questions..."
Question.create(question: "What is 1 + 1?", quiz_id: 1)
Question.create(question: "What is a byproduct of photosynthesis?", quiz_id: 2)
Question.create(question: "On what date did the war end?", quiz_id: 3)
Question.create(question: "Which method permanently removes the last element of an array?", quiz_id: 4)

puts "❗ Seeding Answers..."
Answer.create(answer: "2", correct: true, question_id: 1)
Answer.create(answer: "1", correct: false, question_id: 1)
Answer.create(answer: "3", correct: false, question_id: 1)
Answer.create(answer: "19", correct: false, question_id: 1)
Answer.create(answer: "Oxygen", correct: true, question_id: 2)
Answer.create(answer: "Carbon Dioxide", correct: false, question_id: 2)
Answer.create(answer: "Water", correct: false, question_id: 2)
Answer.create(answer: "Potatoes", correct: false, question_id: 2)
Answer.create(answer: "September 2, 1945", correct: true, question_id: 3)
Answer.create(answer: "October 5, 1984", correct: false, question_id: 3)
Answer.create(answer: "September 25, 2010", correct: false, question_id: 3)
Answer.create(answer: "August 16, 2020", correct: false, question_id: 3)
Answer.create(answer: ".pop", correct: true, question_id: 4)
Answer.create(answer: ".shift", correct: false, question_id: 4)
Answer.create(answer: ".push", correct: false, question_id: 4)
Answer.create(answer: ".unshift", correct: false, question_id: 4)

puts "🌱 Seeding complete!"