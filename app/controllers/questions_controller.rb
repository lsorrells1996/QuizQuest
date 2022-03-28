class QuestionsController < ApplicationController

    def show
        render json: Question.find(params[:id]),  status: :ok
    end

end
