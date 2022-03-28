class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
        render json: quizzes, status: :ok
    end

    def show
        render json: Quiz.find(params[:id]), include: ['questions', 'questions.answers'], status: :ok
    end

end
