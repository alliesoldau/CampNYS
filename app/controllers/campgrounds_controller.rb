class CampgroundsController < ApplicationController
    skip_before_action :authorized_user, only:[:index, :show, :destroy]

    def index
        campgrounds = Campground.all
        render json: campgrounds, status: :ok
    end

    def show
        campgrounds = Campground.where(host_id: params[:id])
        render json: campgrounds, status: :ok, each_serializer: CampgroundsSerializer 
    end

    def destroy
        campground = Campground.find(params[:id])
        campground.destroy
        head :no_content
    end
end
