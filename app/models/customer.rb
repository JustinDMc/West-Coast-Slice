class Customer < ApplicationRecord
    has_many :orders 
    has_many :pizzas, through: :orders

    has_secure_password
    
    validates :username, :password, presence: {message: "Must be present"}
    validates :username, uniqueness: true


end
