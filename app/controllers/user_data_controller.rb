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

  def top_scores
    highest_math_score = UserQuiz.where(quiz_id: 1).max_by {|uq| uq.score}
    highest_math_user = User.find(UserQuiz.where(quiz_id: 1).max_by {|uq| uq.score}.user_id).username
    highest_science_score = UserQuiz.where(quiz_id: 2).max_by {|uq| uq.score}
    highest_science_user = User.find(UserQuiz.where(quiz_id: 2).max_by {|uq| uq.score}.user_id).username
    highest_history_score = UserQuiz.where(quiz_id: 3).max_by {|uq| uq.score}
    highest_history_user = User.find(UserQuiz.where(quiz_id: 3).max_by {|uq| uq.score}.user_id).username
    highest_programming_score = UserQuiz.where(quiz_id: 4).max_by {|uq| uq.score}
    highest_programming_user = User.find(UserQuiz.where(quiz_id: 4).max_by {|uq| uq.score}.user_id).username

    high_score_data = {
      "math_high_score": highest_math_score.score,
      "highest_math_user": highest_math_user,
      "science_high_score": highest_science_score.score,
      "highest_science_user": highest_science_user,
      "history_high_score": highest_history_score.score,
      "highest_history_user": highest_history_user,
      "programming_high_score": highest_programming_score.score,
      "highest_programming_user": highest_programming_user
    }

    render json: high_score_data, status: :ok
  end



end
