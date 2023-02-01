class ChangeHostToHost < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :host?, :host
  end
end
