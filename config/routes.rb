Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :customers

  resources :orders

  resources :pizzas

  resources :toppings
  get "/meat_toppings", to:"toppings#meat"
  get "/veggie_toppings", to:"toppings#veggie"
  get "/other_toppings", to:"toppings#other"
  get "/cheese_toppings", to:"toppings#cheese"  
  get "/sauce_toppings", to:"toppings#sauce"



  resources :logins, only: [:create]
end
