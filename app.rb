require 'sinatra'
require 'json'
require './lib/rsvp_google_sheet'

set :public_folder, File.dirname(__FILE__) + '/static'

get '/' do
    erb :index
end

post '/rsvp' do
    content_type :json
    result = { status: "success" }
    begin
        #logger.info params.to_json
        sheet = RSVPGoogleSheet.new
        sheet.append_row params['name'], params['email'], params['number_of_guests'], params['answer'] do |result, err|
            raise "An error has occured" unless err.nil?
        end
    rescue Exception => e
        logger.error e 
        result = { status: "error" }
    end 
    result
end

get '/rsvp' do
    erb :index
end
