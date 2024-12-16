# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "starting the seeds"

puts "creating the characters"

25.times do
  Character.create(
    name: Faker::TvShows::SiliconValley.character,
    company: Faker::TvShows::SiliconValley.company
  )
end

puts "retrieving the characters"

characters = Character.all

puts "creating the quotes"

50.times do
  Quote.create(
    quote: Faker::TvShows::SiliconValley.quote,
    url: Faker::TvShows::SiliconValley.url,
    character: characters.sample
  )
end

puts "done the seeds"
