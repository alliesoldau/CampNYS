class SitesSerializer < ActiveModel::Serializer
  attributes :id, :name, :capacity, :category, :car_capacity, :campground_id
  belongs_to :campground
end