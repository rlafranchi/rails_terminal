App.output = App.cable.subscriptions.create("OutputChannel", {
    received: function(data) {
        App.outputChars[data.position] = data.output;
        var status = document.getElementById('status');
        status.innerHTML = 'running';
        var code = document.getElementById('output');
        if (App.outputChars[App.outputCounter] === undefined) {
            App.outputChars[App.outputCounter] = ' ';
        }
        code.innerHTML = App.outputChars.join('')
            .replace(/\[33m/g, '<span style="color:yellow;">')
            .replace(/\[32m/g, '<span style="color:green;">')
            .replace(/\[31m/g, '<span style="color:red;">')
            .replace(/\[0m/g, '</span>');
        App.outputCounter++;
    }
});
