class PizzasController < ApplicationController

    def index 
        pizzas = Pizza.all 
        render json: pizzas, only: [:id, :img_url, :name, :size, :price], include: :toppings
    end

    def create  
        pizza = Pizza.create(pizza_params)
        render json: pizza
    end  

    private 

    def pizza_params 
        params.require(:pizza).permit(:name, :size, :price)
    end  

end
