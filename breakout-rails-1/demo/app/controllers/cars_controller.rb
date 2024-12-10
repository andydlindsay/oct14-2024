class CarsController < ApplicationController
  def index
    # render 'index'
  end

  def show
    @my_car = 'toyota tercel'
    @my_drink = 'coffee'
  end
end
