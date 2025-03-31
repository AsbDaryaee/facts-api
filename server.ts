// src/index.ts - Main entry point for the Bun Facts API server
import { factsRouter } from "./src/routes/factRoutes";
import { cors } from "./src/middlewares/cors";
import { logger } from "./src/middlewares/logger";

// Initialize the server
const server = Bun.serve({
    port: process.env.PORT || 3000,
    async fetch(req) {
        // Apply middlewares
        logger(req);

        // Handle CORS
        const corsResponse = cors(req);
        if (corsResponse) return corsResponse;

        // Route handling
        return factsRouter(req);
    },
});

console.log(`🚀 Facts API server running at Port ${server.port}`);

