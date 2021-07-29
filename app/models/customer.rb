class Customer < ApplicationRecord
    has_secure_password
    
    validates :username, presence: true 
    validates :username, length: {minimum: 3}

    validates :password, presence: true 
    validates :password, length: {minimum: 3}
end
