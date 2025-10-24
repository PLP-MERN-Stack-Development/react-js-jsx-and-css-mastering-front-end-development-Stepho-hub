// Minimal Node.js script to check if dev server responds
const http = require('http');

const url = 'http://localhost:5173';
http.get(url, (res) => {
    if (res.statusCode === 200) {
        console.log('Dev server is running and responded with 200 OK.');
        process.exit(0);
    } else {
        console.error('Dev server responded with status:', res.statusCode);
        process.exit(1);
    }
}).on('error', (e) => {
    console.error('Could not connect to dev server:', e.message);
    process.exit(1);
});
