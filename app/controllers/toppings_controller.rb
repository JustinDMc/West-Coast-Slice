class ToppingsController < ApplicationController

    def index 
        render json: Topping.all
    end 

end
