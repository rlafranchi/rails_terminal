Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "command_stream#index"
  resources :command_stream, only: [:new]
end
