class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :view_count
      t.integer :comment_count
      t.timestamps
    end
  end
end
