class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id
  has_many :projects
end