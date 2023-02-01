require 'faker'

affiliation = ['NYS Parks & Rec', 'ADK Mountain Club', 'Independent']
region = ['High Peaks Region', 'Lake George', 'North Daks']
accessibility = ['Hike in', 'Road', 'Boat']

puts "😁 Seeding user data..."

User.create(email: "allie@example.com", host?: false, password: "1234", first_name: "Allie", last_name: "Soldau", image_url: Faker::Avatar.image)

9.times do
    user = User.create(
        email: Faker::Internet.email,
        host?: false,
        password: '1234',
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        affiliation: nil,
        image_url: Faker::Avatar.image
    )
end

5.times do
    user = User.create(
        email: Faker::Internet.email,
        host?: true,
        password: '1234',
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        affiliation: affiliation.sample,
        image_url: Faker::Avatar.image
    )
end

puts "🗺️ Seeding region data..."

region.length.times do |count|
    Region.create(name: region[count])
end

puts "🏕️ Seeding campground data..."

5.times do
    Campground.create(
    name: Faker::Fantasy::Tolkien.location,
    lat: rand(1..100),
    long: rand(1..100),
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: rand(1..region.length),
    host_id: rand(1..5),
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
    )
end


puts "⛺ Seeding site data..."
# t.string :name
# t.integer :capacity
# t.string :type
# t.integer :car_capacity
# t.integer :campground_id

puts "📌 Seeding reservation data..."
# t.integer :number_of_people
# t.date :start_date
# t.date :end_date
# t.integer :cars
# t.integer :site_id
# t.integer :camper_id
# t.integer :host_id


