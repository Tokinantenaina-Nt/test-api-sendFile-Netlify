const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/Capture.PNG')
});
app.listen(6200, () => {
    console.log('listen 6200');

})
module.exports.handler = serverless(app);
