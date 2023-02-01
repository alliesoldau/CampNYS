class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # TO DO: make sure users cant delete/update things that arent theirs

  # before_action 
  before_action :authorized_user

  # current_user and authorized_user 
  def current_user
    user = User.find_by(id:session[:user_id])
  end 

  def authorized_user
      render json:{error:"Not Authorized"}, status: :unauthorized unless current_user
  end 

  private

  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

    def render_not_found(error)
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 
  
end
