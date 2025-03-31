// src/services/factsService.ts
import { facts } from "../data/facts";
import type { Fact } from "../types/Fact";

interface FactsFilter {
    limit?: number;
    verified?: boolean;
}

export class FactsService {
    // Get all facts with optional filtering
    static getAllFacts(filter: FactsFilter = {}): Fact[] {
        let result = [...facts];

        if (filter.verified !== undefined) {
            result = result.filter(fact => fact.verified === filter.verified);
        }

        if (filter.limit && filter.limit > 0) {
            result = result.slice(0, filter.limit);
        }

        return result;
    }

    // Get a specific fact by ID
    static getFactById(id: number): Fact | undefined {
        return facts.find(fact => fact.id === id);
    }

    // Get facts by category
    static getFactsByCategory(category: string): Fact[] {
        return facts.filter(fact =>
            fact.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Search facts
    static searchFacts(query: string): Fact[] {
        const lowercaseQuery = query.toLowerCase();
        return facts.filter(fact =>
            fact.title.toLowerCase().includes(lowercaseQuery) ||
            fact.fact.toLowerCase().includes(lowercaseQuery) ||
            fact.category.toLowerCase().includes(lowercaseQuery)
        );
    }

    // Random fact
    static randomFact(): Fact {
        const randomFactIndex = Math.floor(Math.random() * facts.length)
        return facts[randomFactIndex]!
    }
}