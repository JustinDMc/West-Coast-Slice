class Customer < ApplicationRecord
    has_many :orders 
    has_many :pizzas, through: :orders

    has_secure_password
    
    validates :username, presence: {message: "must be present"}
    validates :username, uniqueness: true


end
