class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :pizza_truck_id 
      t.integer :customer_id 
      t.integer :pizza_id 
      t.string :order_duration

      t.timestamps
    end
  end
end
