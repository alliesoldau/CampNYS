class Reservation < ApplicationRecord

    validates :number_of_people, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :cars, presence: true
    validates :site_id, presence: true
    validates :camper_id, presence: true
    validates :host_id, presence: true

    belongs_to :camper, class_name: "User", foreign_key: "camper_id"
    belongs_to :host, class_name: "User", foreign_key: "host_id"
    belongs_to :site

end
