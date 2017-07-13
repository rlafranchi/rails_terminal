require 'pty'
class CommandHandler
  attr_reader :status
  def initialize(cmd)
    @cmd = cmd
    @status = nil
  end

  def run(&block)
    status = pty do |r,w,pid|
      yield r.getc until r.eof?
      Process.wait(pid)
    end
  end

  private

  def pty(&block)
    PTY.spawn(@cmd, &block)
    @status = $?.exitstatus
  end
end