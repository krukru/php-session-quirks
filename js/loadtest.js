const https = require("http");

function initSession(options) {
    let resolve;
    const req = https.request(options, (response) => {
        resolve(response.headers["set-cookie"] || undefined);
    })
    req.end();

    return new Promise((innerResolve) => {
        resolve = innerResolve;
    });
}

function test(options, sampleIndex) {
    const label = "sample: " + sampleIndex;
    console.time(label);
    const req = https.request(options, (response) => {
        response.on('data', (data) => {
            console.timeLog(label, data.toString());
        })
    })
    req.end();
}

function startTest(options, sampleSize) {
    for (let i = 0; i < sampleSize; i++) {
        test(options, i);
    }
}

function main() {
    const sampleSize = parseInt(process.argv[2], 10);
    const exampleFolder = process.argv[3];

    const options = {
        hostname: "localhost",
        port: 80,
        path: '/php-session-quirks/' + exampleFolder + '/ajax.php',
        method: 'GET',
    }

    initSession(options).then((session) => {
        if (session !== undefined) {
            options.headers = {
                'Cookie': session
            }
        }
        startTest(options, sampleSize)
    });
}

main();




