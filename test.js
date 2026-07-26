const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    if (data === 'Hello World\n') {
      console.log('Test passed: response is Hello World');
      process.exit(0);
    } else {
      console.error('Test failed: unexpected response:', data);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error('Test failed:', err.message);
  process.exit(1);
});
