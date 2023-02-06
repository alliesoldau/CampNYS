class SitesController < ApplicationController
    skip_before_action :authorized_user, only:[:destroy, :update]

    def destroy
        site = Site.find(params[:id])
        site.destroy
        head :no_content
    end

    def update
        site = Site.find(params[:id])
        site.update!(site_params)
        render json: site, status: :accepted
    end

    private
    
    def site_params
        params.permit(:id, :name, :capacity, :category, :car_capacity, :campground_id )
    end

end
