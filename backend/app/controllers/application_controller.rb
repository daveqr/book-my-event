class ApplicationController < ActionController::API
    before_action :configure_permitted_parameters, if: :devise_controller?
    
    protected
    # Only need this for extra fields
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: %i[name avatar])
      devise_parameter_sanitizer.permit(:account_update, keys: %i[name avatar])
    end

  end