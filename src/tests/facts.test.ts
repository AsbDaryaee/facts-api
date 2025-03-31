// tests/facts.test.ts
import { describe, expect, test } from "bun:test";
import { FactsService } from "../services/factsService";

describe("Facts Service", () => {
    test("getAllFacts returns all facts", () => {
        const facts = FactsService.getAllFacts();
        expect(facts.length).toBeGreaterThan(0);
    });

    test("getFactById returns correct fact", () => {
        const fact = FactsService.getFactById(1);
        expect(fact).toBeDefined();
        expect(fact?.id).toBe(1);
        expect(fact?.title).toBe("Saturn's Rings");
    });

    test("getFactsByCategory returns facts in category", () => {
        const facts = FactsService.getFactsByCategory("Space");
        expect(facts.length).toBeGreaterThan(0);
        expect(facts[0].category).toBe("Space");
    });

    test("searchFacts finds facts by query", () => {
        const facts = FactsService.searchFacts("octopus");
        expect(facts.length).toBeGreaterThan(0);
        expect(facts[0].title).toContain("Octopus");
    });
});

