class PizzasController < ApplicationController

    def index 
        pizzas = Pizza.all 
        render json: pizzas, only: [:id, :img_url, :name, :size, :price], include: [:toppings]
    end

    # def show  
    #     pizza = Pizza.find(params[:id])
    #     render json: pizza
    # end  

end
