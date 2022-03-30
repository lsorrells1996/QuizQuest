class UserDataController < ApplicationController
  def show
    userdata = current_user.id.quizzes

    render json: userdata, status: :ok
  end

  private

  def 

end
