import type { Categories } from "./Categories";

export interface Fact {
    id: number;
    category: Categories;
    title: string;
    fact: string;
    verified: boolean;
    source: string;
    year_discovered: number;
    interesting_rating: number;
}

