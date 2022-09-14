class TravelController < ApplicationController
  def index
     require_relative '../../config/secretKeys.rb'
    # require 'cgi'
    # url = CGI.unescape(ENV[trelloCall])
    # puts "Try this" , ENV.keys['api_url']
    # file = YAML.load('secret.yml')
    # puts $trello_api_url
    #YAML.load('secret.yml')
    # puts "hello there"
    # url = getGlobal()
    # puts url
    # puts $trello_api_url.escape 
    # url = $trello_api_url
    render json: request_api($pizza_trello_board)
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
  response = Excon.get(url)
  return JSON.parse(response.body)
end


  # return nil if response.status != 200s
  # puts (response)
  # response.
  # board = me.boards.first
# puts board.name
# render json:board
# puts "Lists: #{board.lists.map {|x| x.name}.join(', ')}"
# puts "Members: #{board.members.map {|x| x.full_name}.join(', ')}"

# def getGlobal()
#   puts  $global_var
#   return $global_var
  
# end


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





