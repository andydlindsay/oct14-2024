class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    create_table :authors do |t|
      t.string :full_name
      t.string :email
      
      t.timestamps
    end
  end
end
