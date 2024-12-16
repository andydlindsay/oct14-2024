class CreateQuotes < ActiveRecord::Migration[7.0]
  def change
    create_table :quotes do |t|
      t.string :quote
      t.string :url

      t.references :character, foreign_key: true, index: true

      t.timestamps
    end
  end
end
