User.delete_all
Company.delete_all
Project.delete_all

5.times do
  User.create!( 
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(8)
    )
end

user_ids = User.pluck(:id)

10.times do
  Company.create!(
    name: Faker::Company.name, 
    description: Faker::Company.catch_phrase,
    user_id: user_ids.sample
    )
end

company_ids = Company.pluck(:id)

20.times do
  Project.create!(
    name: Faker::Lorem.word,
    description: Faker::Company.bs,
    company_id: company_ids.sample
    )
end