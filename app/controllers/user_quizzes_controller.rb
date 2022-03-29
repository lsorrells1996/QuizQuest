class UserQuizzesController < ApplicationController
    def create 
        render json: UserQuiz.create!(u_q_params), status: :created
    end

    def update
        user_quiz = UserQuiz.find_by(score: nil)
        render json: user_quiz.update!(u_q_params), status: :ok
    end

    private

    def u_q_params
        params.permit(:user_id, :quiz_id, :score)
    end
end
