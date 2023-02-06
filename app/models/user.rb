class User < ApplicationRecord
    has_secure_password

    # TO DO: make sure its actually an email format 
    validates :email, presence: true, uniqueness: true

    has_many :host_reservations, class_name: "Reservation", foreign_key: "host_id", dependent: :destroy
    has_many :camper_reservations, class_name: "Reservation", foreign_key: "camper_id", dependent: :destroy

    has_many :sites, through: :host_reservations
    has_many :sites, through: :camper_reservations
end
