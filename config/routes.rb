Rails.application.routes.draw do

  devise_scope :user do
    get "/sessions/current" => "ember_devise_simple_auth/sessions#show"
  end

  namespace :api do
    resources :companies
    resources :projects
    resources :users, only: [:index, :show, :create]
  end

  root to: 'assets#index'
  
  devise_for :users, controllers: { sessions: 'ember_devise_simple_auth/sessions' }
  
  get '*path', to: 'assets#index'
end