Rails.application.routes.draw do

  namespace :api do
    resources :companies do
      resources :projects
    end
  end

  root to: 'assets#index'
  
  devise_for :users
  
   get '*path', to: 'assets#index'
end