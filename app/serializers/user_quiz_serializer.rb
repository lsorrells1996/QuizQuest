class UserQuizSerializer < ActiveModel::Serializer
  attributes :id
  has_one :quiz
  has_one :user
end
