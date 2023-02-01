class Region < ApplicationRecord
    
    validates :name, presence: true, uniqueness: true

    has_many :campgrounds
    has_many :sites, through: :campgrounds
end
