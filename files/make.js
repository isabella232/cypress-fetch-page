var exec = require('child_process').exec;
for (let i = 13; i <= 100; ++i) {
    dir = exec(`cp /home/daniel/dev/sandbox/cypress-fetch-page/time/smurfs1.jpg /home/daniel/dev/sandbox/cypress-fetch-page/time/smurfs${i}.jpg`, function(err, stdout, stderr) {
        if (err) {
            console.error(err);
        }
        console.log(stdout);
    });
}
