require "spec_helper"

describe Task do
  it { should validate_presence_of :title }

  describe "default value for complete" do
    it "returns false" do
      task = Task.new
      task.should_not be_complete
    end
  end
end
