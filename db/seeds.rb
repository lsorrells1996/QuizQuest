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
Question.create(question: "What is 1 + 1?", quiz_id: Quiz.all[0].id)
Question.create(question: "What is a byproduct of photosynthesis?", quiz_id: Quiz.all[1].id)
Question.create(question: "On what date did the war end?", quiz_id: Quiz.all[2].id)
Question.create(question: "Which method permanently removes the last element of an array?", quiz_id: Quiz.all[3].id)

puts "❗ Seeding Answers..."
Answer.create(answer: "2", correct: true, question_id: Question.all[0].id)
Answer.create(answer: "1", correct: false, question_id: Question.all[0].id)
Answer.create(answer: "3", correct: false, question_id: Question.all[0].id)
Answer.create(answer: "19", correct: false, question_id: Question.all[0].id)
Answer.create(answer: "Oxygen", correct: true, question_id: Question.all[1].id)
Answer.create(answer: "Carbon Dioxide", correct: false, question_id: Question.all[1].id)
Answer.create(answer: "Water", correct: false, question_id: Question.all[1].id)
Answer.create(answer: "Potatoes", correct: false, question_id: Question.all[1].id)
Answer.create(answer: "September 2, 1945", correct: true, question_id: Question.all[2].id)
Answer.create(answer: "October 5, 1984", correct: false, question_id: Question.all[2].id)
Answer.create(answer: "September 25, 2010", correct: false, question_id: Question.all[2].id)
Answer.create(answer: "August 16, 2020", correct: false, question_id: Question.all[2].id)
Answer.create(answer: ".pop", correct: true, question_id: Question.all[3].id)
Answer.create(answer: ".shift", correct: false, question_id: Question.all[3].id)
Answer.create(answer: ".push", correct: false, question_id: Question.all[3].id)
Answer.create(answer: ".unshift", correct: false, question_id: Question.all[3].id)

puts "🌱 Seeding complete!"