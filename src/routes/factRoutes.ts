// src/routes/factsRoutes.ts
import { FactsController } from "../controllers/factsController";

export async function factsRouter(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;
    const method = req.method;

    // GET /api/facts - Get all facts
    if (path === "/api/facts" && method === "GET") {
        return FactsController.getAllFacts(req);
    }

    // GET /api/facts/:id - Get a specific fact by ID
    if (path.match(/^\/api\/facts\/\d+$/) && method === "GET") {
        const id = parseInt(path.split("/").pop() || "0");
        return FactsController.getFactById(req, id);
    }

    // GET /api/facts/category/:category - Get facts by category
    if (path.match(/^\/api\/facts\/category\/[\w-]+$/) && method === "GET") {
        const category = path.split("/").pop() || "";
        return FactsController.getFactsByCategory(req, category);
    }

    // GET /api/facts/search - Search facts
    if (path === "/api/facts/search" && method === "GET") {
        return FactsController.searchFacts(req);
    }

    // Handle 404 Not Found
    return new Response("Not Found", { status: 404 });
}

