class UserDataController < ApplicationController
  def show
    # userdata = current_user.id.quizzes
    
    highest_math_score = current_user.user_quizzes.where(quiz_id: 1).max_by {|uq| uq.score}
    highest_science_score = current_user.user_quizzes.where(quiz_id: 2).max_by {|uq| uq.score}
    highest_history_score = current_user.user_quizzes.where(quiz_id: 3).max_by {|uq| uq.score}
    highest_programming_score = current_user.user_quizzes.where(quiz_id: 4).max_by {|uq| uq.score}

    user_data = {
      "highest_math_score": highest_math_score.score,
      "highest_science_score": highest_science_score.score,
      "highest_history_score": highest_history_score.score,
      "highest_programming_score": highest_programming_score.score
    }
    
    render json: user_data, status: :ok
  end



end
