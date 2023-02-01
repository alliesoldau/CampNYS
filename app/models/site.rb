class Site < ApplicationRecord

    # validates :capacity, presence: true
    # validates :campground_id, presence: true
    # # TO DO: make the name unique just within a campground
    # validates :name, presence: true

    belongs_to :campground
    has_many :reservations, dependent: :destroy
   
end
