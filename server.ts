import { factsRouter } from "./src/routes/factRoutes";
import { getOptoinsHeader } from "./src/middlewares/optionsHeader";
import { logger } from "./src/middlewares/logger";
import { config } from "./src/config";

const server = Bun.serve({
    port: process.env.PORT || 3000,
    async fetch(req) {


        if (config.logger) logger(req);

        const corsResponse = getOptoinsHeader(req);
        if (corsResponse) return corsResponse;

        // Route handling
        return factsRouter(req);
    },
});

console.log(`🚀 Facts API server running at Port ${server.port}`);

