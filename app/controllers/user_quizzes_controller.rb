class UserQuizzesController < ApplicationController
    def create 
        render json: UserQuiz.create!(u_q_params), status: :created
    end

    private

    def u_q_params
        params.permit(:user_id, :quiz_id)
    end
end
