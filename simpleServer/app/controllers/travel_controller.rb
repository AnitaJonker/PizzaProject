class TravelController < ApplicationController
  def index
    # url = ""
    render json: request_api(url)

  end
end
# app/controllers/travel_controller.rb
# ...
# def search
# countries = find_country(params[:country])

# unless countries
#   flash[:alert] = 'Country not found'
#   return render action: :index
# end

#   # ...
# end

# app/controllers/travel_controller.rb
private

require 'excon'
def request_api(url)
  response = Excon.post( url)
  # return nil if response.status != 200s
  # puts (response)
 return JSON.parse(response.body)
  
end


def show
  render json: @beer
end

# def find_country(name)
#   request_api(
#     "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions"
#   )

# end


# # search // find country
# def search
#   countries = find_country(params[:country])
#   unless countries
#     flash[:alert] = 'Country not found'
#     return render action: :index
#   end
#   @country = countries.first
#   @weather = find_weather(@country['capital'], @country['alpha2Code'])
# end

# # find weather
# def find_weather(city, country_code)
#   query = URI.encode("#{city},#{country_code}")

#   request_api(
#     "https://community-open-weather-map.p.rapidapi.com/forecast?q=#{query}"
#   )
# end





