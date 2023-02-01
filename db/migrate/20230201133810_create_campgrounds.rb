class CreateCampgrounds < ActiveRecord::Migration[7.0]
  def change
    create_table :campgrounds do |t|
      t.string :name
      t.float :lat
      t.float :long
      t.date :openning_date
      t.date :closing_date
      t.string :accessibility
      t.integer :region_id
      t.integer :host_id
      t.timestamps
    end
  end
end
