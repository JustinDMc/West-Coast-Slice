class CreatePizzas < ActiveRecord::Migration[6.1]
  def change
    create_table :pizzas do |t|
      t.string :img_url 
      t.string :name 
      t.string :size 
      t.integer :price

      t.timestamps
    end
  end
end
