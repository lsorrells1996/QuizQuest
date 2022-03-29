class QuestionsController < ApplicationController

    def show
        render json: Question.where(quiz_id: params[:quiz_id]),  status: :ok
    end

end
