class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
        render json: quizzes, status: :ok
    end

    def show
        questions = Quiz.find(params[:id])
        if questions
            render json: questions
        else
            render json: { error: "Quiz questions not found" }, status: :not_found
        end
    end

end
