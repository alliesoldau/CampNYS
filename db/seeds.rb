require 'faker'

affiliation = ['NYS Parks & Rec', 'ADK Mountain Club', 'Independent']
region = ['High Peaks Region', 'Lake George', 'North Daks', 'Catskills']
accessibility = ['Hike-in', 'Road', 'Boat']
category = ['Tent', 'Lean-to', 'Cabin', 'Elevated surface', 'Mushroom shelter']
campground_image_urls = ['https://images.unsplash.com/photo-1624923686627-514dd5e57bae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2802&q=80',
'https://images.unsplash.com/photo-1571687949921-1306bfb24b72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
'https://images.unsplash.com/photo-1599753642061-84495820669f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
'https://images.unsplash.com/photo-1571983890292-5d10b2f19d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
'https://images.unsplash.com/photo-1626077414855-6dfb9286c109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
'https://images.unsplash.com/photo-1628087236671-6730a5b9d79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
'https://images.unsplash.com/photo-1613487700156-bbde37f69132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80'
]

puts "😁 Seeding user data..."
User.create(email: "user", host: false, password: "1234", first_name: "User", last_name: "Soldau", image_url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')
User.create(email: "host", host: true, password: "1234", first_name: "Host", last_name: "Soldau", affiliation: affiliation.sample, image_url: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80')

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
    image_url: campground_image_urls[0]
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
    image_url: campground_image_urls[1]
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
    image_url: campground_image_urls[2]
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
    image_url: campground_image_urls[3]
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
    image_url: campground_image_urls[4]
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
    image_url: campground_image_urls[5]
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
    image_url: campground_image_urls[6]
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
    image_url: campground_image_urls[7]
)

puts "⛺ Seeding site data..."
10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 1,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 2,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 3,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 4,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 5,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 6,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 7,
    )
end

10.times do |count|
    Site.create(
        name: Faker::Creature::Animal.name.capitalize(),
        capacity: rand(1..6),
        category: category.sample,
        car_capacity: rand(0..3),
        # campground_id: count + 1 > 8 ? count + 1 - 8 : count + 1
        campground_id: 8,
    )
end

puts "📌 Seeding reservation data..."
# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today, to: Date.today + 1)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 3),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today + 4, to: Date.today + 5)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 4),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today + 9, to: Date.today + 12)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 3),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today + 15, to: Date.today + 17)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 3),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today + 20, to: Date.today + 21)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 3),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today + 24, to: Date.today + 27)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 4),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

# 40.times do |count|
#     site = Site.all.sample
#     startDate = Faker::Date.between(from: Date.today + 31, to: Date.today + 32)
#     Reservation.create(
#         number_of_people: rand(1..10),
#         start_date: startDate,
#         end_date: Faker::Date.between(from: startDate + 1, to: startDate + 4),
#         # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
#         site_id: site.id,
#         cars: rand(0..site.car_capacity),
#         camper_id: 1,
#         # camper_id: User.where(host: false).sample.id,
#         # host_id: User.where(host: true).sample.id,
#         host_id: 2
#     )
# end

6.times do |count|
    site = Site.all.sample
    startDate = Faker::Date.between(from: Date.today + 36, to: Date.today + 38)
    Reservation.create(
        number_of_people: rand(1..10),
        start_date: startDate,
        end_date: Faker::Date.between(from: startDate + 1, to: startDate + 4),
        # site_id: count + 1 > 16 ? count + 1 - 16 : count + 1,
        site_id: site.id,
        cars: rand(0..site.car_capacity),
        camper_id: 1,
        # camper_id: User.where(host: false).sample.id,
        # host_id: User.where(host: true).sample.id,
        host_id: 2
    )
end