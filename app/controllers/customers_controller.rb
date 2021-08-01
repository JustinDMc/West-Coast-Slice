class CustomersController < ApplicationController

    def index 
        customers = Customer.all 
        render json: customers
    end  

    def create 
        customer = Customer.create(customer_params)
        if customer.valid?
            render json: {id:customer.id, username: customer.username, address: customer.home_address}
        else  
            render json: {message: customer.errors.full_messages}
        end 
    end

    private 

    def customer_params 
        params.require(:customer).permit(:username, :password, :home_address)
    end  

end
