class Campground < ApplicationRecord

    validates :name, presence: true
    validates :lat, presence: true
    validates :lng, presence: true
    validates :openning_date, presence: true
    validates :closing_date, presence: true
    validates :region_id, presence: true
    validates :host_id, presence: true

    belongs_to :host, class_name: "User", foreign_key: :host_id
    belongs_to :region
    has_many :sites
    has_many :reservations, through: :sites

    # instance method 
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

        # class method 
        def self.get_nested_campground_data 
            all.map do |campground|
                nested_campground = {
                    id: campground.id,
                    name: campground.name,
                    lat: campground.lat,
                    lng: campground.lng,
                    openning_date: campground.openning_date,
                    closing_date: campground.closing_date,
                    accessibility: campground.accessibility,
                    region_id: campground.region_id,
                    host_id: campground.host_id,
                    image_url: campground.image_url,
                    res_count: campground.reservations.count,
                    site_count: campground.sites.count,
                    sites: campground.sites.map do |site|
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

    
end
