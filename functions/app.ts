import { EdgeFunction, Request, Context } from "@netlify/edge-functions";

const imageHandler: EdgeFunction = async (event) => {
    const { request } = event;

    // Vous pouvez définir des conditions pour vérifier quelle image renvoyer en fonction de la requête
    // Ici, nous renvoyons simplement une image interne
    const internalImage = new URL("/Capture.png", request.url);

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
