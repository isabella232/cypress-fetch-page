var exec = require('child_process').exec;
for (let i = 13; i <= 1000; ++i) {
    dir = exec(`cp smurfs1.jpg smurfs${i}.jpg`, function(err, stdout, stderr) {
        if (err) {
            console.error(err);
        }
        console.log(stdout);
    });
}
