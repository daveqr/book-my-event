
cities = [
  { name: 'Tampa', state: 'FL' },
  { name: 'El Paso', state: 'TX' },
  { name: 'Burbank', state: 'CA' }
]

10.times do
  city = cities.sample

  Event.create!(
    name: Faker::Movie.title,
    date: Faker::Time.between(from: DateTime.now, to: DateTime.now + 30),
    location: Faker::Educator.university,
    description: Faker::Quote.famous_last_words,
    city: city[:name],
    state: city[:state], 
    capacity: rand(10..100),
    price: rand(10.0..100.0).round(2),
    category: Faker::Lorem.word,
    organizer: Faker::Name.name
  )
end


# User.create(name: 'John Doe', email: 'john@example.com', password: 'password')
# User.create(name: 'Jane Smith', email: 'jane@example.com', password: 'password')
