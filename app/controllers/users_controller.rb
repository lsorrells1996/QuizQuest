class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        render json: User.create!(user_params), status: :created
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
