class ChangeTypeToCategoryInSites < ActiveRecord::Migration[7.0]
  def change
    rename_column :sites, :type, :category
  end
end
