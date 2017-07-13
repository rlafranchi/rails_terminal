
function runCommand(cmd) {
    commandEl = document.getElementById('output');
    commandEl.innerHTML = '';
    App.outputChars = [];
    App.outputCounter = 0;
    axios.get('/command_stream/new', { params: { cmd: cmd } })
      .then(function(res) {
          var status = document.getElementById('status');
          status.innerHTML = res.data.status === 0 ? 'OK' : 'FAILED';
      });
}