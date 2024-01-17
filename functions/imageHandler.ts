import type { Context, Config } from "@netlify/edge-functions";

// Let's serve an image that's stored in the repo
// by rewriting the URL.

export default async (request: Request, context: Context) => {
    // Récupérer l'URL de l'image interne
    const imageUrl = new URL("/Capture.png", request.url);

    // Créer une réponse avec la redirection vers l'image interne
    const response = new Response(null, {
        status: 200,
        headers: {
            "Location": imageUrl.toString(),
            "Content-Type": "image/png", // Spécifiez le type de contenu si nécessaire
        },
    });

    return response;
};

export const config: Config = {
    path: "/",
};
