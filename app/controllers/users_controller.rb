class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.create!(user_params)
        UserQuiz.create!(user_id: user.id, quiz_id: 1, score: 0)
        UserQuiz.create!(user_id: user.id, quiz_id: 2, score: 0)
        UserQuiz.create!(user_id: user.id, quiz_id: 3, score: 0)
        UserQuiz.create!(user_id: user.id, quiz_id: 4, score: 0)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: current_user, include: ['quizzes'], status: :ok
    end

    def update
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end

    def update_password
        current_user.update!(user_params)
        session.delete :user_id
        head :no_content
    end

    def destroy
        current_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
