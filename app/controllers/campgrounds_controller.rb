class CampgroundsController < ApplicationController
    skip_before_action :authorized_user, only:[:index, :show]

    def index
        campgrounds = Campground.all
        render json: campgrounds, status: :ok
    end

    def show
        campgrounds = Campground.where(host_id: params[:id])
        render json: campgrounds, status: :ok
    end
end
