class CreateToppings < ActiveRecord::Migration[6.1]
  def change
    create_table :toppings do |t|
      t.string :name
      t.string :topping_type

      t.timestamps
    end
  end
end
