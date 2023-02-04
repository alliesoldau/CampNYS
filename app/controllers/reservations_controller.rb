class ReservationsController < ApplicationController
    skip_before_action :authorized_user, only:[:show]

    def show
        reservations = Reservation.where(camper_id: params[:id])
        render json: reservations, status: :ok, each_serializer: ReservationsSerializer
    end

end
