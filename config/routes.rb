EmberBlog::Application.routes.draw do
  root to: 'application#index'
  resources :posts

  match '/*path' => 'application#index', :constraints => { :format => 'html' }
end
