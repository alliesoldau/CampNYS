class CampgroundsController < ApplicationController
    skip_before_action :authorized_user, only:[:index]

    def index
        campgrounds = Campground.all
        render json: campgrounds, status: :ok
    end
end
