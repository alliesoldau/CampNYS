# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_01_134014) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campgrounds", force: :cascade do |t|
    t.string "name"
    t.float "lat"
    t.float "long"
    t.date "openning_date"
    t.date "closing_date"
    t.string "accessibility"
    t.integer "region_id"
    t.integer "host_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "regions", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "number_of_people"
    t.date "start_date"
    t.date "end_date"
    t.integer "cars"
    t.integer "site_id"
    t.integer "camper_id"
    t.integer "host_id"
  end

  create_table "sites", force: :cascade do |t|
    t.string "name"
    t.integer "capacity"
    t.string "type"
    t.integer "car_capacity"
    t.integer "campground_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.boolean "host?"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "affiliation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
