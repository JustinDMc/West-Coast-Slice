Customer.destroy_all
PizzaTruck.destroy_all
Pizza.destroy_all
Order.destroy_all
Topping.destroy_all
# PizzaTopping.destroy_all

puts "Seeding Customers..."
customer1 = Customer.create(username: "Allen", password_digest: "123", home_address: "1111 Texas Lane")
customer2 = Customer.create(username: "Justin", password_digest: "123", home_address: "1111 California Lane")
customer3 = Customer.create(username: "Hadi", password_digest: "123", home_address: "1111 Las Vegas Lane")

puts "Seeding PizzaTruck..."
pizza_truck = PizzaTruck.create(name: "West Coast Slice")

puts "Seeding Pizzas..."
pizza1 = Pizza.create(img_url: "http://veryculinary.com/wp-content/uploads/2017/01/Meat-lovers-pizza.jpg", name: "Meat Lovers", size: "small", price: 14)

puts "Seeding Orders..."
order1 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer1.id, pizza_id: pizza1.id)

puts "Seeding Toppings..."
topping1 = 

# puts "Seeding PizzaToppings..."
# pizza_topping1 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping1.id)

puts "Finished seeding!"