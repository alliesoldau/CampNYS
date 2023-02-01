class Site < ApplicationRecord

    # validates :capacity, presence: true
    # validates :campground_id, presence: true
    # # TO DO: make the name unique just within a campground
    # validates :name, presence: true

    belongs_to :campground
    has_many :host_reservations, class_name: "Reservation", foreign_key: "host_id"
    has_many :camper_reservations, class_name: "Reservation", foreign_key: "camper_id", dependent: :destroy
 
end
