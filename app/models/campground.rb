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

    
end
