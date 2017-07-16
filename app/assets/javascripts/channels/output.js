App.output = App.cable.subscriptions.create("OutputChannel", {
    received: function(data) {
        var status = document.getElementById('status');
        status.innerHTML = 'running';

        var screenshot = document.getElementById('screenshot');

        var code = document.getElementById('output');
        if (data.output.includes(']1337;')) {
            var splitImg = data.output.split(';');
            var imgTitle = atob(splitImg[1].split('=name=')[1]);
            var height = splitImg[2].split('=')[1];
            var imgData = 'data:image/png;base64,' + splitImg[3].split(':')[1];
            screenshot.innerHTML += '<p>' + imgTitle + '</p>';
            screenshot.innerHTML += '<img src="' + imgData + '" alt="' + imgTitle + '" height="' + height + '">';
        } else {
            code.innerHTML += data.output
                .replace(/\[33m/g, '<span style="color:yellow;">')
                .replace(/\[32m/g, '<span style="color:green;">')
                .replace(/\[31m/g, '<span style="color:red;">')
                .replace(/\[0m/g, '</span>');
        }
    }
});
