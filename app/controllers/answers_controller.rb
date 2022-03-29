class AnswersController < ApplicationController

    def show
        answerArray = Answer.where(question_id: params[:question_id])
        render json: answerArray.find_by(correct: true), status: :ok 
    end

end
