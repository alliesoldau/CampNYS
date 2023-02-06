class SitesController < ApplicationController
    skip_before_action :authorized_user, only:[:destroy]

    def destroy
        site = Site.find(params[:id])
        site.destroy
        head :no_content
    end

end
