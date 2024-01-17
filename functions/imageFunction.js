// imageProcessingFunction.js
const sharp = require('sharp');
const fs = require('fs');

exports.handler = async function (event, context) {
    // Lire l'image depuis le fichier
    const imagePath = './Capture.png';
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
};
