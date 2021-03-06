# frozen_string_literal: true

class AddHiddenToImages < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :hidden, :boolean, null: false, default: false
  end
end
