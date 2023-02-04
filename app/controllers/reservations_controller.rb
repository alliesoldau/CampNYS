class ReservationsController < ApplicationController
    skip_before_action :authorized_user, only:[:show, :destroy]

    def show
        reservations = Reservation.where(camper_id: params[:id])
        render json: reservations, status: :ok, each_serializer: ReservationsSerializer
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        head :no_content
    end

end
