Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get '*path', to: 'hello_world#index', constraints: -> (req) { req.format.nil? || req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
