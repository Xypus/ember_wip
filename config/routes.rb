Rails.application.routes.draw do

  namespace :api do
    resources :companies
    resources :projects
    resources :users, only: [:index, :show, :create]
  end

  root to: 'assets#index'
  
  devise_for :users
  
   get '*path', to: 'assets#index'
end