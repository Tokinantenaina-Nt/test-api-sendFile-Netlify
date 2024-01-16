const serverless = require('serverless-http');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('*', (req, res) => {
    const filePath = "functions/test.json";
    // //OU, lecture synchrone du fichier (à utiliser avec prudence, car cela peut bloquer le serveur)
    // try {
    //     const data = fs.readFileSync(filePath, 'utf8');
    //     res.json(JSON.parse(data));
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Erreur lors de la lecture du fichier JSON');
    // }
    res.sendFile(filePath, { root: process.cwd() });
});
app.listen(6200, () => {
    console.log('listen 6200');

})
module.exports.handler = serverless(app);
