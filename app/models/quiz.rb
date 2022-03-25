class Quiz < ApplicationRecord
    has_many :user_quizzes, dependent: :destroy
    has_many :users, through: :user_quizzes
end
