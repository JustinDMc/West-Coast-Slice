class CreatePizzaTrucks < ActiveRecord::Migration[6.1]
  def change
    create_table :pizza_trucks do |t|
      t.string :name

      t.timestamps
    end
  end
end
