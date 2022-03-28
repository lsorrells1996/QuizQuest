Rails.application.routes.draw do
  
  # resources :user_quizzes
  # resources :answers
<<<<<<< HEAD
  # resources :questions
  # resources :quizzes
  resources :users, only: :update
=======
  # resources :questions, only: :show
  resources :quizzes, only: [:index, :show]
  # resources :users, only: :create
>>>>>>> main
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

end
