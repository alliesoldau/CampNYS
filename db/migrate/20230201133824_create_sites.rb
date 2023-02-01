class CreateSites < ActiveRecord::Migration[7.0]
  def change
    create_table :sites do |t|
      t.string :name
      t.integer :capacity
      t.string :type
      t.integer :car_capacity
      t.integer :campground_id
      t.timestamps
    end
  end
end
