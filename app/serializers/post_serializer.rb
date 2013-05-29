class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :view_count, :comment_count
end