// imageProcessingFunction.js
const sharp = require('sharp');
const axios = require('axios');

exports.handler = async function (event, context) {
    try {
        // Récupérer l'image depuis GitHub
        const githubResponse = await axios.get('https://raw.githubusercontent.com/Tokinantenaina-Nt/test-api-sendFile-Netlify/main/Capture.png', { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(githubResponse.data, 'binary');

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
