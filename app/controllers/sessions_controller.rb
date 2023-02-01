class SessionsController < ApplicationController
    skip_before_action :authorized_user, only:[:create]
    
    def create
        #find the user
        user = User.find_by(username:params[:username])
        #authenticate user
        if user&.authenticate(params[:password])
            #Save user to session
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {errors: "Incorrect Username or Password"}, status: :unauthorized
        end 
    end 

    def destroy
        session.delete :user_id
        head :no_content
    end 
end
