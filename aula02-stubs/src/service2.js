const https = require('https');

function call() {
    https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
        let data = '';
    
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            console.log(chunk)
            data += chunk;
        });
    
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data).data);
        });
    
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
    
}

call();