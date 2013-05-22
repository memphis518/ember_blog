# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

include ActionView::Helpers::TextHelper

10.times do
  paragraphs = Faker::Lorem.paragraphs(5).collect{ |p| simple_format(p) }

  Post.create(title: Faker::Lorem.sentence, body: paragraphs.join(' '))
end