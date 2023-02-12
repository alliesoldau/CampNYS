require 'faker'

affiliation = ['NYS Parks & Rec', 'ADK Mountain Club', 'Independent']
region = ['High Peaks Region', 'Lake George', 'North Daks', 'Catskills']
accessibility = ['Hike in', 'Road', 'Boat']
category = ['Tent', 'Lean-to', 'Cabin', 'Elevated surface']

puts "😁 Seeding user data..."
User.create(email: "user", host: false, password: "1234", first_name: "User", last_name: "Soldau", image_url: Faker::Avatar.image)
User.create(email: "host", host: true, password: "1234", first_name: "Host", last_name: "Soldau", affiliation: affiliation.sample, image_url: Faker::Avatar.image)

# 8.times do
#     User.create(
#         email: Faker::Internet.email,
#         host: false,
#         password: '1234',
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         affiliation: nil,
#         image_url: Faker::Avatar.image
#     )
# end

# 5.times do
#     User.create(
#         email: Faker::Internet.email,
#         host: true,
#         password: '1234',
#         first_name: Faker::Name.first_name,
#         last_name: Faker::Name.last_name,
#         affiliation: affiliation.sample,
#         image_url: Faker::Avatar.image
#     )
# end

puts "🗺️ Seeding region data..."
region.length.times do |count|
    Region.create(name: region[count])
end

puts "🏕️ Seeding campground data..."
# 5.times do
#     Campground.create(
#         name: Faker::Fantasy::Tolkien.location,
#         lat: rand(1..100),
#         lng: rand(1..100),
#         openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
#         closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
#         accessibility: accessibility.sample,
#         region_id: Region.all.sample.id,
#         host_id: User.where(host: true).sample.id,
#         image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
#     )
# end

Campground.create(
    name: "Sleepy Hallow",
    lat: 42.06918811359417,
    lng: -74.3048490846581,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 4,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "Fish Creek",
    lat: 44.30353436049772,
    lng: -74.35904341534187,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 3,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "Lake George Schroon Valley",
    lat: 43.59325998513567,
    lng: -73.73204293807699,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 2,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "Meadowbrook",
    lat: 44.29879710291092,
    lng: -74.07497108465812,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 1,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "ADK Loj",
    lat: 44.18286103187915,
    lng: -73.96613001563273,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 1,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "Max V. Shaul State Park",
    lat: 42.546693757871786,
    lng: -74.40939625451111,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 4,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "Lake George / Saratoga KOA Journey",
    lat: 43.34226563801515,
    lng: -73.83715456137222,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 2,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)
Campground.create(
    name: "Lincoln Pond Campground",
    lat: 44.1416224217299,
    lng: -73.57977506137222,
    openning_date: Faker::Date.between(from: '2023-05-15', to: '2023-07-01'),
    closing_date: Faker::Date.between(from: '2023-08-15', to: '2023-10-31'),
    accessibility: accessibility.sample,
    region_id: 3,
    # host_id: User.where(host: true).sample.id,
    host_id: 2,
    image_url: 'https://photos.smugmug.com/photos/i-6tdg72J/0/X2/i-6tdg72J-X2.jpg'
)

puts "⛺ Seeding site data..."
14.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name,
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        campground_id: count + 1 > 7 ? count + 1 - 7 : count + 1
        # campground_id: Campground.all.sample.id,
    )
end


puts "📌 Seeding reservation data..."
28.times do |count|
    startDate = Faker::Date.between(from: '2023-02-12', to: '2023-02-28')
    Reservation.create(
        number_of_people: rand(1..10),
        start_date: startDate,
        end_date: Faker::Date.between(from: startDate, to: '2023-03-31'),
        site_id: count + 1 > 14 ? count + 1 - 14 : count + 1,
        cars: rand(0..Site.find(count + 1 > 14 ? count + 1 - 14 : count + 1).car_capacity),
        camper_id: 1,
        # camper_id: User.where(host: false).sample.id,
        # host_id: User.where(host: true).sample.id,
        host_id: 2
    )
end