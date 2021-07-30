class Pizza < ApplicationRecord
    has_many :orders 
    has_many :customers, through: :orders
    has_many :pizza_toppings  
    has_many :toppings, through: :pizza_toppings
end
