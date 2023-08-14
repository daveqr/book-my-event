class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionsFix

  respond_to :json

  private
  def respond_with(current_user, _opts = {})
    logger.debug(UserSerializer.new(resource).serializable_hash[:data][:attributes])
    if resource.persisted?
      render json: {
        status: {code: 200, message: 'Signed up successfully.'},
        data: UserSerializer.new(current_user).serializable_hash[:data][:attributes]
      }
    else
      #Rails.logger.debug(current_user.to_json)
      render json: {
        status: {message: "User couldn't be created successfully. #{current_user.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
end