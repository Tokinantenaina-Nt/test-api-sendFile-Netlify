import { EdgeFunction, Request, Context } from "@netlify/edge-functions";

const imageHandler: EdgeFunction = async (event) => {
    const { request } = event;

    // Référence à une image stockée dans le répertoire public/images
    const internalImage = new URL("/images/apple-touch-icon.png", request.url);

    // Créez la réponse en fonction de l'image
    const response = new Response(null, {
        status: 200,
        headers: {
            "Content-Type": "image/png",
        },
    });

    // Redirigez la réponse vers l'image interne
    response.headers.set("location", internalImage.toString());
    return response;
};

export { imageHandler };
