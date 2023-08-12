Rails.application.routes.draw do
  devise_for :users
  resources :events
  post '/register', to: 'registrations#create'
end
