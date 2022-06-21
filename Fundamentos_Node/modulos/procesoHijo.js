const { exec} = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
    if(error){
        console.log(error)
        return false;
    }
    console.log(stdout)
})
