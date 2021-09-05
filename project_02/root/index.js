const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const port = 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port);
console.log('Server running...');
