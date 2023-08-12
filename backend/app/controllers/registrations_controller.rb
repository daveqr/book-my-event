# app/controllers/registrations_controller.rb
class RegistrationsController < ApplicationController
    def create
      user = User.new(user_params)
      if user.save
        render json: { message: 'User registered successfully' }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
  