# app/models/event.rb

class Event < ApplicationRecord
    # Validations
    validates :name, presence: true
    validates :date, presence: true
    validates :location, presence: true
    validates :description, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :capacity, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :category, presence: true
    validates :organizer, presence: true
  end
  