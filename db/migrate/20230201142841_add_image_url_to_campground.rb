class AddImageUrlToCampground < ActiveRecord::Migration[7.0]
  def change
    add_column :campgrounds, :image_url, :string
  end
end
