class ToppingsController < ApplicationController

    def index 
        render json: Topping.all
    end 

    def meat 
        render json: Topping.all.select {|topping| topping.topping_type == "Meat"}
    end  

    def veggie 
        render json: Topping.all.select {|topping| topping.topping_type == "Veggie"}
    end 

    def other
        render json: Topping.all.select {|topping| topping.topping_type == "Other"}
    end 

    def cheese
        render json: Topping.all.select {|topping| topping.topping_type == "Cheese"}
    end 

    def sauce
        render json: Topping.all.select {|topping| topping.topping_type == "Sauce"}
    end 

end
