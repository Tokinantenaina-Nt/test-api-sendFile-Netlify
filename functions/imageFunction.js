// imageProcessingFunction.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

exports.handler = async function (event, context) {
    // Obtenir le chemin complet de l'image en fonction du répertoire de déploiement de Netlify
    const imagePath = path.join(__dirname, 'Capture.png');

    try {
        // Lire l'image depuis le fichier
        const imageBuffer = fs.readFileSync(imagePath);

        // Traitement de l'image (redimensionnement dans cet exemple)
        const processedImageBuffer = await sharp(imageBuffer)
            .resize({ width: 300 })
            .toBuffer();

        return {
            statusCode: 200,
            body: processedImageBuffer.toString('base64'),
            isBase64Encoded: true,
            headers: {
                'Content-Type': 'image/png',
            },
        };
    } catch (error) {
        console.error('Error reading or processing image:', error);

        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};
