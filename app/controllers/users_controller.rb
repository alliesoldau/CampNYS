class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create, :show, :update]

    def show 
        user = User.find(params[:id])
        if user.host === true
            render json: user.host_nested_data, status: :ok
        else 
            render json: user, status: :ok
        end
    end 


    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        if user.host === true
            render json: user.host_nested_data, status: :ok
        else 
            render json: user, status: :ok
        end
    end 

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        if user.host 
            render json: user.host_nested_data, status: :accepted
        else
            render json: user, status: :accepted
        end
    end

    private

    def user_params
        params.permit(:id, :email, :password, :host, :first_name, :last_name, :affiliation, :image_url)
    end 
    
end
