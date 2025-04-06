import { FactsService } from "../services/factsService";
import { getHeaders } from "../utils/getHeaders";

const { headers } = getHeaders()

export class FactsController {
    // Get all facts
    static async getAllFacts(req: Request): Promise<Response> {
        try {
            const url = new URL(req.url);
            const limit = parseInt(url.searchParams.get("limit") || "0");
            const verified = url.searchParams.get("verified");

            const facts = FactsService.getAllFacts({
                limit,
                verified: verified === "true" ? true : verified === "false" ? false : undefined
            });

            return Response.json(facts, {
                headers
            });
        } catch (error) {
            return Response.json({ error: "Failed to get facts" }, { status: 500, headers });
        }
    }

    // Get a specific fact by ID
    static async getFactById(req: Request, id: number): Promise<Response> {
        try {
            const fact = FactsService.getFactById(id);

            if (!fact) {
                return Response.json({ error: "Fact not found" }, { status: 404, headers });
            }

            return Response.json(fact, {
                headers
            });
        } catch (error) {
            return Response.json({ error: "Failed to get fact" }, { status: 500, headers });
        }
    }

    // Get facts by category
    static async getFactsByCategory(req: Request, category: string): Promise<Response> {
        try {
            const facts = FactsService.getFactsByCategory(category);

            if (facts.length === 0) {
                return Response.json({ error: "No facts found for this category" }, { status: 404, headers });
            }

            return Response.json(facts, {
                headers
            });
        } catch (error) {
            return Response.json({ error: "Failed to get facts" }, { status: 500, headers });
        }
    }

    // Search facts
    static async searchFacts(req: Request): Promise<Response> {
        try {
            const url = new URL(req.url);
            const query = url.searchParams.get("q") || "";

            const facts = FactsService.searchFacts(query);

            return Response.json(facts, {
                headers
            });
        } catch (error) {
            return Response.json({ error: "Failed to search facts" }, { status: 500, headers });
        }
    }

    // Random fact
    static async randomFact(req: Request): Promise<Response> {
        try {
            const facts = FactsService.randomFact()
            return Response.json(facts, {
                headers
            });
        } catch (error) {
            return Response.json({ error: "Failed to search facts" }, { status: 500, headers });
        }
    }
}

