class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.belongs_to :company, index: true

      t.timestamps
    end
  end
end
