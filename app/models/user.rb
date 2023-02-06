class User < ApplicationRecord
    has_secure_password

    # TO DO: make sure its actually an email format 
    validates :email, presence: true, uniqueness: true

    has_many :host_reservations, class_name: "Reservation", foreign_key: "host_id", dependent: :destroy
    has_many :camper_reservations, class_name: "Reservation", foreign_key: "camper_id", dependent: :destroy

    has_many :campgrounds, foreign_key: "host_id", class_name: "Campground"

    def get_campground_and_site_data
        self.campgrounds.map do |campground|
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

    def host_nested_data
        host = {
            id: id,
            email: email,
            host: self.host,
            password_digest: password_digest,
            first_name: first_name,
            last_name: last_name,
            affiliation: affiliation,
            image_url: image_url,
            campgrounds: get_campground_and_site_data
        }

    end

    # TO DO: do later if need be 
    # def get_reservation_data
    # end
end
