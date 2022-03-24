class CreateQuizzes < ActiveRecord::Migration[6.1]
  def change
    create_table :quizzes do |t|
      t.string :topic
      t.string :title

      t.timestamps
    end
  end
end
