class LoginsController < ApplicationController

    def create  
        customer = Customer.find_by(username: params[:username])
        if customer &.authenticate(params[:password])
            render json: {id: customer.id, username: customer.username}
        else 
            render json: {message: "Invalid username or password"}
        end  
    end

end
