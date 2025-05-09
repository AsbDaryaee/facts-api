// All Data Are Provided By Claude AI Sonnet 3.7 :)

import type { Fact } from "../types/Fact";
import { animalFacts } from "./categories/animals";
import { astronomyFacts } from "./categories/astronomy";
import { biologyFacts } from "./categories/biology";
import { historyFacts } from "./categories/history";
import { physicsFacts } from "./categories/physics";
import { technologyFacts } from "./categories/technology";

const allFacts: Fact[] = [...animalFacts, ...astronomyFacts, ...biologyFacts, ...historyFacts, ...physicsFacts, ...technologyFacts]

export const facts: Fact[] = [
];

allFacts.forEach((item, index) => {
  facts.push({
    ...item,
    id: index + 1,
  })
});