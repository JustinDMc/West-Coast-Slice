Customer.destroy_all

puts "Seeding customers..."
customer1 = Customer.create(username: "Allen", password_digest: "123", home_address: "1111 Texas Lane")
customer2 = Customer.create(username: "Justin", password_digest: "123", home_address: "1111 California Lane")
customer3 = Customer.create(username: "Hadi", password_digest: "123", home_address: "1111 Las Vegas Lane")

puts "Finished seeding!"