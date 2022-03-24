class User < ApplicationRecord
    has_secure_password
    has_many :user_quizzes
    has_many :quizzes, through: :user_quizzes
end
