class Campground < ApplicationRecord

    # validates :name, presence: true, uniqueness: true
    # validates :lat, presence: true, uniqueness: true
    # validates :long, presence: true, uniqueness: true
    # validates :openning_date, presence: true
    # validates :closing_date, presence: true
    # validates :region_id, presence: true
    # validates :host_id, presence: true

    belongs_to :host, class_name: "User", foreign_key: :host_id
    belongs_to :region
    has_many :sites
    has_many :reservations, through: :sites

    def get_site_and_calc_data
        campground_data = {
            id: self.id,
            name: self.name,
            lat: self.lat,
            lng: self.lng,
            openning_date: self.openning_date,
            closing_date: self.closing_date,
            accessibility: self.accessibility,
            region_id: self.region_id,
            host_id: self.host_id,
            res_count: self.reservations.count,
            site_count: self.sites.count,
            image_url: self.image_url,
                sites: self.sites.map do |site|
                    nested_site = {
                        id: site.id,
                        name: site.name,
                        capacity: site.capacity,
                        category: site.category,
                        car_capacity: site.car_capacity,
                        campground_id: site.campground_id,
                        reservations: site.reservations
                    }
                end
            }
        end

    
end
