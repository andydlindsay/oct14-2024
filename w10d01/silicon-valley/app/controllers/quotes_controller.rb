class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
    @character = Character.find 2

    render json: {
      quotes: @quotes,
      more_stuff: 'hello world',
      character: @character
    }
  end
end
