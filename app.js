const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/app1', (req, res) => {
  res.send('Hi, it\'s App1');
});

app.get('/app2', (req, res) => {
  res.send('Hi, it\'s App2');
});

// Load SSL certificate and private key
const options = {
  key: fs.readFileSync('/home/ubuntu/multip_path/private.key'),
  cert: fs.readFileSync('/home/ubuntu/multip_path/certificate.crt')
};

// Start the HTTPS server on port 443
const server = https.createServer(options, app);

server.listen(443, () => {
  console.log('HTTPS server running on port 443');
});

