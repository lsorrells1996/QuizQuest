require 'rails_helper'

RSpec.describe "UserData", type: :request do
  describe "GET /show" do
    it "returns http success" do
      get "/user_data/show"
      expect(response).to have_http_status(:success)
    end
  end

end
