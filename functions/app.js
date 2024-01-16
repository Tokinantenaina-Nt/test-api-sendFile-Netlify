const serverless = require('serverless-http');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('*', (req, res) => {
    const filePath = path.join(process.cwd(), "functions/test.json");
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du fichier JSON');
        } else {
            // Envoi du contenu JSON en tant que réponse
            res.json(JSON.parse(data));
        }
    });
    //res.sendFile(filePath);
});
app.listen(6200, () => {
    console.log('listen 6200');

})
module.exports.handler = serverless(app);
