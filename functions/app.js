const serverless = require('serverless-http');
const express = require('express');
const app = express();
const path = require('path');

app.get('*', (req, res) => {
    const filePath = path.join(process.cwd(), "functions/Capture.PNG");
    res.sendFile(filePath);
});
app.listen(6200, () => {
    console.log('listen 6200');

})
module.exports.handler = serverless(app);
