User.all.destroy_all
UserQuiz.all.destroy_all
Quiz.all.destroy_all
Question.all.destroy_all
Answer.all.destroy_all

puts "👤 Seeding Users..."
10.times {
    User.create(
        username: Faker::Name.first_name
    )
}


User.create(username: 'Jim', password: '123')



