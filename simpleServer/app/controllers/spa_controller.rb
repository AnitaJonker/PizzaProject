class SpaController < ApplicationController
  layout 'spa'
  
  def index
  end
  
  require 'trello'
  require 'rest-client'
  require 'json'
 

  Trello.configure do |config|
    # API key generated by visiting https://trello.com/1/appKey/generate
    config.developer_public_key = ENV['my_trello_key']
  
    # Member token
    # larry-price.com/blog/2014/03/18/connecting-to-the-trello-api/
    config.member_token = ENV['my_trello_token']
  end
  
  # find myself
me = Trello::Member.find("anitajonker3")

# end
# find first board
board = me.boards.first
puts board.name
render json:board
puts "Lists: #{board.lists.map {|x| x.name}.join(', ')}"
puts "Members: #{board.members.map {|x| x.full_name}.join(', ')}"
# board.cards.each do |card|
#       puts "- \"#{card.name}\""
#       puts "-- Actions: #{card.actions.nil? ? 0 : card.actions.count}"
#       puts "-- Members: #{card.members.count}"
#       puts "-- Labels: #{card.labels.count}"
# end

  
  

end