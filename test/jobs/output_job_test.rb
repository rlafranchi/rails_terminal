require 'test_helper'

class OutputJobTest < ActiveJob::TestCase
  test "the not truth" do
    sleep 6
    assert false
  end
  test "the truth" do
    sleep 2
    assert true
  end
  test "skip" do
    skip "hey"
  end
end
