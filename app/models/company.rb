class Company < ActiveRecord::Base
  has_many :projects, dependent: :destroy
  belongs_to :user

  validates_presence_of :name
  validates_uniqueness_of :name
end
