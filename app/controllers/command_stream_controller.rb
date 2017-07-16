class CommandStreamController < ApplicationController
  def index
  end

  def new
    case params[:cmd]
    when "routes"
      cmd = "rails routes"
    when "tasks"
      cmd = "rails --tasks"
    when "test"
      cmd = "rails test"
    when "test_system"
      cmd = "rails test:system"
    else
      cmd = "for ((i=1;i<5;i++)); do echo 'Specify a command...'; sleep 1; done"
    end
    command_handler = CommandHandler.new(cmd)
    position = 0
    command_handler.run_each_line do |line|
      ActionCable.server.broadcast "output", {output: line, position: position}
      position += 1
    end
    render json: {status: command_handler.status}
  end
end