class Campground < ApplicationRecord

    # validates :name, presence: true, uniqueness: true
    # validates :lat, presence: true, uniqueness: true
    # validates :long, presence: true, uniqueness: true
    # validates :openning_date, presence: true
    # validates :closing_date, presence: true
    # validates :region_id, presence: true
    # validates :host_id, presence: true

    belongs_to :host, class_name: "User"
    belongs_to :region
    has_many :sites
    # TO DO: CAN I DO THIS OR DO I NEED TO USE THE FOREIGN KEY??
    # OPTION 1 
    has_many :reservations, through: :sites
    # OPTION 2
    # has_many :host_reservations, class_name: "Reservation", foreign_key: "host_id", dependent: :destroy
    # has_many :camper_reservations, through: :host_reservations
    # has_many :camper_reservations, class_name: "Reservation", foreign_key: "camper_id", dependent: :destroy
    # has_many :host_reservations, through: :camper_reservations
end
