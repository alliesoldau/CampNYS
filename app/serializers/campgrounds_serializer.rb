class CampgroundsSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :lng, :openning_date, :closing_date, :accessibility, :region_id, :host_id, :image_url
  has_many :reservations
end
