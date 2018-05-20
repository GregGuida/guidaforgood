require 'sinatra'
require 'json'

set :public_folder, File.dirname(__FILE__) + '/static'

get '/' do
    erb :index
end

post '/rsvp' do
    logger.info params.to_json
end
