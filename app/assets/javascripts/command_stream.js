function runCommand(cmd) {
    axios.get('/command_stream/new', { params: { cmd: cmd } })
      .then(function(res) {
          var commandEl = document.getElementById('output')
          commandEl.innerHTML = res.data.output
      })
}