class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create, :show, :update]

    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end 

    def create
        user = User.create!(user_params)
        # session[:user_id] = user.id
        render json: user, status: :created
    end 

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private

    def user_params
        params.permit(:id, :email, :password, :host, :first_name, :last_name, :affiliation, :image_url)
    end 
    
end
