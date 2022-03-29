class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer, :correct
  has_one :question
end
