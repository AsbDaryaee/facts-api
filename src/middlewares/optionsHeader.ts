import { getHeaders } from "../utils/getHeaders";

export function getOptoinsHeader(req: Request): Response | null {
    if (req.method === "OPTIONS") {
        return new Response(null, {
            ...getHeaders(),
            status: 204
        });
    }

    return null;
}

