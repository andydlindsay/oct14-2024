# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "starting the seeds"

puts "creating the authors (if needed)"

dr_seuss = Author.find_or_create_by(
  full_name: 'Dr. Seuss',
  email: 'dr@seuss.com'
)

agatha = Author.find_or_create_by(
  full_name: 'Agatha Christie',
  email: 'agatha@allalong.com'
)

puts "creating the books"

Book.create(
  title: 'Hop on Pop',
  publisher: 'Golden Books',
  author: dr_seuss
)
Book.create(
  title: '1 Fish 2 Fish',
  publisher: 'Golden Books',
  author: dr_seuss
)
Book.create(
  title: 'Murder on the Orient Express',
  publisher: 'Not Golden Books',
  author: agatha
)

puts "end of the seeds"
