require 'spec_helper'

describe Project do
  describe 'validations' do
    it { should validate_presence_of :name}
    it { should belong_to :company}
  end
end
