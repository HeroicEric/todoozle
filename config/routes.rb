Todoozle::Application.routes.draw do
  root to: 'pages#index'

  resources :tasks, only: [:index, :show]
end
