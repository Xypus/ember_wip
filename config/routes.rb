Rails.application.routes.draw do

  root 'companies#index'
  
  devise_for :users
  
  resources :companies do
    resources :projects
  end
end