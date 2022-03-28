class QuizSerializer < ActiveModel::Serializer
  attributes :id, :topic, :title

  has_many :questions
end
