class RSVPGoogleSheet
    require 'google/apis/sheets_v4'
    require 'openssl'
    
    def initialize
        @sheet = ENV['GOOGLE_SHEET_ID']
        @service = Google::Apis::SheetsV4::SheetsService.new
        @service.client_options.application_name = ENV['GOOGLE_APPLICATION_NAME']
        @service.authorization = Google::Auth::ServiceAccountCredentials.new(
            token_credential_uri: Google::Auth::ServiceAccountCredentials::TOKEN_CRED_URI,
            audience: Google::Auth::ServiceAccountCredentials::TOKEN_CRED_URI,
            scope: Google::Apis::SheetsV4::AUTH_SPREADSHEETS,
            issuer: ENV['GOOGLE_CLIENT_EMAIL'],
            signing_key: OpenSSL::PKey::RSA.new(ENV['GOOGLE_PRIVATE_KEY'])
        )
    end

    def read_row row
        range = "Sheet1!A#{row}:D#{row}"
        response = @service.get_spreadsheet_values(ENV['GOOGLE_SHEET_ID'], range)
        logger.info params.to_json response.values
    end

    def append_row name, email, number_of_guests, will_attend
        range = "Sheet1!A1:D1"

        values = Google::Apis::SheetsV4::ValueRange.new(
            values: [[name, email, number_of_guests, will_attend]],
        )

        @service.append_spreadsheet_value(
            @sheet, range, values, 
            include_values_in_response: true, 
            insert_data_option: "INSERT_ROWS", 
            value_input_option: "USER_ENTERED",
        ) do |result, err| 
            yield result, err
        end
    end
end