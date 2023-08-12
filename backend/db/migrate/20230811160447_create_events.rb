class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.string :location
      t.text :description
      t.string :city
      t.string :state
      t.integer :capacity
      t.decimal :price
      t.string :category
      t.string :organizer

      t.timestamps
    end
  end
end
