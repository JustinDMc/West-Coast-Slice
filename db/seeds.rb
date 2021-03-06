Customer.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('customers')
PizzaTruck.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('pizza_trucks')
Pizza.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('pizzas')
Order.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('orders')
Topping.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('toppings')
PizzaTopping.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('pizza_toppings')

puts "Seeding Customers..."
customer1 = Customer.create(username: "Allen", password_digest: "123", home_address: "1111 Texas Lane")
customer2 = Customer.create(username: "Justin", password_digest: "123", home_address: "1111 California Lane")
customer3 = Customer.create(username: "Hadi", password_digest: "123", home_address: "1111 Las Vegas Lane")

puts "Seeding PizzaTruck..."
pizza_truck = PizzaTruck.create(name: "West Coast Slice")

puts "Seeding Pizzas..."
# Meat Lovers 
pizza1 = Pizza.create(img_url: "https://thumbs.dreamstime.com/t/meat-lovers-pizza-2010957.jpg", name: "Meat Lovers", size: "Medium", price: 12, ordered: false)
# Supreme
pizza2 = Pizza.create(img_url: "https://media.istockphoto.com/photos/pizza-from-the-top-deluxe-picture-id182148711?k=6&m=182148711&s=612x612&w=0&h=98xrKN_qDB3WjNeMP-vLT8ywloOekXjNIGVpnx3yHpw=", name: "Supreme", size: "Medium", price: 14, ordered: false)
# Hawaiian 
pizza3 = Pizza.create(img_url: "https://thumbs.dreamstime.com/b/hawaiian-pizza-isolated-white-background-57285518.jpg", name: "Hawaiian", size: "Medium", price: 13, ordered: false)
# Chicken Pesto
pizza4 = Pizza.create(img_url: "https://thumbs.dreamstime.com/b/bianco-pizza-smoked-chicken-rucola-cheese-sauce-mushroom-pesto-neapolitan-round-white-background-mozzarella-tomato-218637928.jpg", name: "Chicken Pesto", size: "Medium", price: 12, ordered: false)
# BBQ Chicken 
pizza5 = Pizza.create(img_url: "https://images.ctfassets.net/xk7bgtqy9xrd/2PtXHwNYfo21wSzEDCn9Oq/cade0857737ac8a6e16efecb63985d91/BBQ_Pizza_thighs.jpg?q=80", name: "BBQ Chicken", size: "Medium", price: 15, ordered: false)
# Vegetarian
pizza6 = Pizza.create(img_url: "https://previews.123rf.com/images/artmim/artmim1803/artmim180300079/96918245-vegetable-pizza-on-white-background-top-view.jpg", name: "Veggie Lovers", size: "Medium", price: 11, ordered: false)
#Margherita 
pizza7 = Pizza.create(img_url: "https://images.creativemarket.com/0.1.0/ps/6013505/300/200/m1/fpc/wm0/pxnu5m3mr7z1ucekdnbm1nyqy0ppf2geox692klamxrtp5y9rx5o4tysfybbyexh-.jpg?1551896616&s=4618a284fd863f8cb83a1883761c15f2", name: "Margherita", size: "Medium", price: 10, ordered: false)
#Buffalo 
pizza8 = Pizza.create(img_url: "https://thumbs.dreamstime.com/b/chicken-pizza-white-background-30364993.jpg", name: "Buffalo", size: "Medium", price: 14, ordered: false)
#Cheese 
pizza9 = Pizza.create(img_url: "https://thumbs.dreamstime.com/b/tasty-hot-cheese-pizza-white-background-120059374.jpg", name: "Cheese", size: "Medium", price: 10, ordered: false)

puts "Seeding Orders..."
order1 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer1.id, pizza_id: pizza1.id)
order2 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer1.id, pizza_id: pizza6.id)
order3 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer2.id, pizza_id: pizza2.id)
order4 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer2.id, pizza_id: pizza3.id)
order5 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer3.id, pizza_id: pizza7.id)
order6 = Order.create(pizza_truck_id: pizza_truck.id, customer_id: customer3.id, pizza_id: pizza4.id)

puts "Seeding Toppings..."
topping1 = Topping.create(name: "Italian Sausage", topping_type: "Meat")
topping2 = Topping.create(name: "Bacon", topping_type: "Meat")
topping3 = Topping.create(name: "Pepperoni", topping_type: "Meat")
topping4 = Topping.create(name: "Ground Beef", topping_type: "Meat")
topping5 = Topping.create(name: "Ham", topping_type: "Meat")
topping6 = Topping.create(name: "Black Olives", topping_type: "Veggie")
topping7 = Topping.create(name: "Broccoli", topping_type: "Veggie")
topping8 = Topping.create(name: "Spinach", topping_type: "Veggie")
topping9 = Topping.create(name: "Anchovies", topping_type: "Veggie")
topping10 = Topping.create(name: "Sun-Dried Tomato", topping_type: "Veggie")
topping11 = Topping.create(name: "Grilled Chicken", topping_type: "Meat")
topping12= Topping.create(name: "Jalapeno", topping_type: "Veggie")
topping13= Topping.create(name: "Roasted Red Peppers", topping_type: "Veggie")
topping14= Topping.create(name: "Green Peppers", topping_type: "Veggie")
topping15= Topping.create(name: "Onions", topping_type: "Veggie")
topping16= Topping.create(name: "Pineapple", topping_type: "Veggie")
topping17 = Topping.create(name: "Mushrooms", topping_type: "Veggie")
topping18 = Topping.create(name: "Mozarella", topping_type: "Cheese")
topping19 = Topping.create(name: "Marinara", topping_type: "Sauce")
topping20 = Topping.create(name: "BBQ Sauce", topping_type: "Sauce")
topping21 = Topping.create(name: "Cilantro", topping_type: "Veggie")
topping22 = Topping.create(name: "Feta", topping_type: "Cheese")
topping23 = Topping.create(name: "Garlic", topping_type: "Veggie")
topping24 = Topping.create(name: "Hot Honey", topping_type: "Other")
topping25 = Topping.create(name: "Parmesan", topping_type: "Cheese")
topping26 = Topping.create(name: "Basil", topping_type: "Veggie")
topping27 = Topping.create(name: "Tomato", topping_type: "Veggie")
topping28 = Topping.create(name: "Pesto", topping_type: "Sauce")
topping29 = Topping.create(name: "Artichoke Hearts", topping_type: "Veggie")
topping30 = Topping.create(name: "Capers", topping_type: "Veggie")
topping31 = Topping.create(name: "Cheddar", topping_type: "Cheese")
topping32 = Topping.create(name: "Buffalo Hot Sauce", topping_type: "Other")
topping33 = Topping.create(name: "Parsley", topping_type: "Veggie")
topping34 = Topping.create(name: "Provolone", topping_type: "Cheese")
topping35 = Topping.create(name: "American Cheese", topping_type: "Cheese")
topping36 = Topping.create(name: "Ranch", topping_type: "Other")
topping37 = Topping.create(name: "Sri-Rancha", topping_type: "Other")
topping38 = Topping.create(name: "Balsamic Fig Glaze", topping_type: "Other")
topping39 = Topping.create(name: "Alfredo Sauce", topping_type: "Sauce")



puts "Seeding PizzaToppings..."
# Meat Lovers Pizza
pizza_topping1 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping1.id)
pizza_topping2 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping2.id)
pizza_topping3 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping3.id)
pizza_topping4 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping4.id)
pizza_topping5 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping5.id)
pizza_topping6 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping18.id)
pizza_topping7 = PizzaTopping.create(pizza_id: pizza1.id, topping_id: topping19.id)

# Supreme Pizza
pizza_topping8 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping1.id)
pizza_topping9 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping3.id)
pizza_topping10 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping6.id)
pizza_topping11 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping14.id)
pizza_topping12 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping15.id)
pizza_topping13= PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping17.id)
pizza_topping14 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping18.id)
pizza_topping15 = PizzaTopping.create(pizza_id: pizza2.id, topping_id: topping19.id)

# Hawaiian Pizza 
pizza_topping16= PizzaTopping.create(pizza_id: pizza3.id, topping_id: topping2.id)
pizza_topping17= PizzaTopping.create(pizza_id: pizza3.id, topping_id: topping5.id)
pizza_topping18= PizzaTopping.create(pizza_id: pizza3.id, topping_id: topping16.id)
pizza_topping19 = PizzaTopping.create(pizza_id: pizza3.id, topping_id: topping18.id)
pizza_topping20 = PizzaTopping.create(pizza_id: pizza3.id, topping_id: topping19.id)

# Chicken Pesto Pizza
pizza_topping20 = PizzaTopping.create(pizza_id: pizza4.id, topping_id: topping11.id)
pizza_topping21 = PizzaTopping.create(pizza_id: pizza4.id, topping_id: topping25.id)
pizza_topping22 = PizzaTopping.create(pizza_id: pizza4.id, topping_id: topping27.id)
pizza_topping23 = PizzaTopping.create(pizza_id: pizza4.id, topping_id: topping28.id)
pizza_topping24 = PizzaTopping.create(pizza_id: pizza4.id, topping_id: topping29.id)
pizza_topping25 = PizzaTopping.create(pizza_id: pizza4.id, topping_id: topping30.id)

# BBQ Chicken Pizza
pizza_topping26 = PizzaTopping.create(pizza_id: pizza5.id, topping_id: topping11.id)
pizza_topping27 = PizzaTopping.create(pizza_id: pizza5.id, topping_id: topping15.id)
pizza_topping28 = PizzaTopping.create(pizza_id: pizza5.id, topping_id: topping19.id)
pizza_topping29 = PizzaTopping.create(pizza_id: pizza5.id, topping_id: topping20.id)
pizza_topping30 = PizzaTopping.create(pizza_id: pizza5.id, topping_id: topping21.id)

# Veggie Lovers Pizza 
pizza_topping31 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping6.id)
pizza_topping32 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping13.id)
pizza_topping33 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping14.id)
pizza_topping34 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping15.id)
pizza_topping35 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping17.id)
pizza_topping36 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping19.id)
pizza_topping37 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping26.id)
pizza_topping38 = PizzaTopping.create(pizza_id: pizza6.id, topping_id: topping27.id)

# Margherita Pizza
pizza_topping39 = PizzaTopping.create(pizza_id: pizza7.id, topping_id: topping19.id)
pizza_topping40 = PizzaTopping.create(pizza_id: pizza7.id, topping_id: topping26.id)
pizza_topping41 = PizzaTopping.create(pizza_id: pizza7.id, topping_id: topping27.id)
pizza_topping42 = PizzaTopping.create(pizza_id: pizza7.id, topping_id: topping31.id)

# Buffalo Pizza 
pizza_topping43 = PizzaTopping.create(pizza_id: pizza8.id, topping_id: topping11.id)
pizza_topping44 = PizzaTopping.create(pizza_id: pizza8.id, topping_id: topping15.id)
pizza_topping45 = PizzaTopping.create(pizza_id: pizza8.id, topping_id: topping32.id)
pizza_topping46 = PizzaTopping.create(pizza_id: pizza8.id, topping_id: topping33.id)
pizza_topping47 = PizzaTopping.create(pizza_id: pizza8.id, topping_id: topping34.id)
pizza_topping48 = PizzaTopping.create(pizza_id: pizza8.id, topping_id: topping35.id)

# Cheese Pizza 
pizza_topping49 = PizzaTopping.create(pizza_id: pizza9.id, topping_id: topping18.id)
pizza_topping50 = PizzaTopping.create(pizza_id: pizza9.id, topping_id: topping19.id)
pizza_topping51 = PizzaTopping.create(pizza_id: pizza9.id, topping_id: topping25.id)
pizza_topping52 = PizzaTopping.create(pizza_id: pizza9.id, topping_id: topping31.id)
pizza_topping53 = PizzaTopping.create(pizza_id: pizza9.id, topping_id: topping34.id)


puts "Finished seeding!"