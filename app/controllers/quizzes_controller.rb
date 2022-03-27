class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
        render json: quizzes, status: :ok
    end

end
