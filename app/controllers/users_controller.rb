class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create]

    def show 
        render json: current_user, status: :ok
    end 
    
end
