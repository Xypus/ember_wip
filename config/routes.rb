Rails.application.routes.draw do

  namespace :api do
    resources :companies
    resources :projects
  end

  root to: 'assets#index'
  
  devise_for :users
  
   get '*path', to: 'assets#index'
end