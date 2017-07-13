class OutputChannel < ApplicationCable::Channel
  def subscribed
    stream_from "output"
  end
end
