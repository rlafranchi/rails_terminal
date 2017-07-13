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
    else
      cmd = "for ((i=1;i<5;i++)); do echo 'Specify a command...'; sleep 1; done"
    end
    output = `#{cmd}`
    render json: {status: $?.exitstatus, output: output}
  end
end