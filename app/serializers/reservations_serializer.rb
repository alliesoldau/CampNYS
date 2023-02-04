class ReservationsSerializer < ActiveModel::Serializer
  attributes :id, :number_of_people, :start_date, :end_date, :cars, :site_id, :camper_id, :host_id
  belongs_to :site, serializer: SitesSerializer
end

