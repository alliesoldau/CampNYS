class ReservationsController < ApplicationController
    skip_before_action :authorized_user, only:[:show, :destroy, :update, :create]

    def show
        reservations = Reservation.where(camper_id: params[:id])
        render json: reservations, status: :ok, each_serializer: ReservationsSerializer
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        head :no_content
    end

    def update
        reservation = Reservation.find(params[:id])
        reservation.update!(reservation_params)
        render json: reservation, status: :accepted, serializer: ReservationsSerializer
    end

    def create
        reservation = Reservation.create!(reservation_params)
        render json: reservation, status: :ok, serializer: ReservationsSerializer
    end 

    private 

    def reservation_params
        params.permit(:id, :number_of_people, :start_date, :end_date, :cars, :number_of_people, :site_id, :camper_id, :host_id)
    end 

end
