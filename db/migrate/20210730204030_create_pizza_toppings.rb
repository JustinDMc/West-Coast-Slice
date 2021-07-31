class CreatePizzaToppings < ActiveRecord::Migration[6.1]
  def change
    create_table :pizza_toppings do |t|
      t.integer :pizza_id  
      t.integer :topping_id

      t.timestamps
    end
  end
end
