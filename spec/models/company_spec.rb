require 'spec_helper'

describe Company do
  describe 'validations' do
    it { should validate_presence_of :name }
    it { should validate_uniqueness_of :name }
    it { should belong_to :user }
  end
end
