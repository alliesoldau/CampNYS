class ChangeLongToLngInCampgrounds < ActiveRecord::Migration[7.0]
  def change
    rename_column :campgrounds, :long, :lng
  end
end
