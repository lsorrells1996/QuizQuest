Rails.application.routes.draw do
  
  get 'user_data/show'
  resources :user_quizzes, only: :create
  # resources :answers
  # resources :questions
  resources :quizzes, only: [:index, :show]
  resources :users, only: [:update, :destroy, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  patch '/update_password', to: 'users#update_password'

  patch '/score', to: 'user_quizzes#update'

  get '/current', to: 'user_data#show'
end
