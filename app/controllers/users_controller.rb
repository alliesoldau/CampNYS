class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create, :show]

    def show 
        # debugger
        user = User.find(params[:id])
        render json: user, status: :ok
    end 
    
end
