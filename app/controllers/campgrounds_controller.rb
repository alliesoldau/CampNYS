class CampgroundsController < ApplicationController
    skip_before_action :authorized_user, only:[:index, :show, :destroy, :update, :create]

    def index
        campgrounds = Campground.all
        render json: campgrounds, status: :ok
    end

    def show
        # debugger
        campgrounds = Campground.where(host_id: params[:id])
        render json: campgrounds, status: :ok, each_serializer: CampgroundsSerializer 
    end

    def create
        campground = Campground.create!(campground_params)
        render json: campground.get_site_and_calc_data, status: :ok
    end 

    def destroy
        campground = Campground.find(params[:id])
        campground.destroy
        head :no_content
    end

    def update
        campground = Campground.find(params[:id])
        campground.update!(campground_params)
        render json: campground, status: :accepted, serializer: CampgroundsSerializer
    end

    private 

    def campground_params
        params.permit(:id, :name, :lat, :lng, :openning_date, :closing_date, :accessibility, :host_id, :region_id, :image_url)
    end 
end