class SitesController < ApplicationController
    skip_before_action :authorized_user, only:[:destroy, :update, :create]

    def destroy
        site = Site.find(params[:id])
        site.destroy
        head :no_content
    end

    def update
        site = Site.find(params[:id])
        site.update!(site_params)
        render json: site, include: :reservations, status: :accepted
    end

    def create
        site = Site.create!(site_params)
        render json: site, include: :reservations, status: :ok
    end 

    private
    
    def site_params
        params.permit(:id, :name, :capacity, :category, :car_capacity, :campground_id )
    end

end
