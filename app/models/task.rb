class Task < ActiveRecord::Base
  attr_accessible :title, :complete

  validates_presence_of :title
end
