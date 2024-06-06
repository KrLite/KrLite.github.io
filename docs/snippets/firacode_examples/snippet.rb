class Car < ActiveRecord::Base
	has_many :wheels, :class_name => "Wheel", :foreign_key => "car_id"
	scope :available, -> { where(:available => true) }
end

if (line1 ~= /Cats.*/ && line !~ /Dogs.*/)
	omega = -> { 'www' }
	alpha ->(arg) { arg*2 }
	hash = { 1 => 'one', 2 => 'two' }
end