class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question
  has_one :quiz
end
