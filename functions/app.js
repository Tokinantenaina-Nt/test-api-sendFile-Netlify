const serverless = require('serverless-http');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('*', (req, res) => {
    const filePath = "functions/test.json";

    // Utilisation de fs.readFile pour lire le contenu et l'envoyer directement
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la lecture du fichier JSON');
        } else {
            // Envoyer le contenu JSON en tant que réponse
            res.type('application/json').send(data);
        }
    });
});
app.listen(6200, () => {
    console.log('listen 6200');

})
module.exports.handler = serverless(app);
