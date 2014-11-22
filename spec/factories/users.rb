FactoryGirl.define do

  factory :user do
    first_name 'MyFirstName'
    last_name  'MyLastName'
    email       Faker::Internet.email
    password   'password123'
  end

end
