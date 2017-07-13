class OutputJob < ApplicationJob
  queue_as :default

  def perform(cmd)
  end
end
