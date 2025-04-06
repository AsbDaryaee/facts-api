import { config } from "../config";

export function getHeaders() {
    return {
        headers: {
            "Access-Control-Allow-Origin": config.corsOrigins,
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Max-Age": "86400",
            "Cache-Control": "public, max-age=3600",
            "Content-Type": "application/json",
        }
    }
}