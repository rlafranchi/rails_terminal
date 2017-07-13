require 'pty'
class CommandHandler
  def initialize(cmd)
    @cmd = cmd
  end

  run
end