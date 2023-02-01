class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :number_of_people
      t.date :start_date
      t.date :end_date
      t.integer :cars
      t.integer :site_id
      t.integer :camper_id
      t.integer :host_id
    end
  end
end
