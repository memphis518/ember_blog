class PostsController < ApplicationController
 respond_to :html, :json
 before_filter :remove_params, :only => [:create, :update]
 def index
   respond_with Post.order('created_at desc')
 end

 def show
   respond_with Post.find(params[:id])
 end

 def create
   respond_with Post.create(params[:post])
 end

 def update
   respond_with Post.update(params[:id], params[:post])
 end

 def destroy
   respond_with Post.destroy(params[:id])
 end

 private
 def remove_params
   params[:post].delete(:view_count)
   params[:post].delete(:comment_count)
   params[:post].delete(:created_at)
   params[:post].delete(:updated_at)
 end
end
