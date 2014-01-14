var spawn = require('child_process').spawn;
spawn('vim', [], {stdio: [process.stdin, process.stdout, process.stderr]});
