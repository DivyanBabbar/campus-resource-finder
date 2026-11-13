import test from "node:test";
import assert from "node:assert/strict";
import { filterResources } from "../src/resources.js";

const items = [
  { name: "Peer Learning Hub", description: "Programming tutoring", location: "Library", category: "learning", tags: ["study"] },
  { name: "Food Pantry", description: "Groceries and meals", location: "North Hall", category: "wellbeing", tags: ["food"] }
];

test("search covers descriptions and locations, ignoring case and outer spaces", () => {
  assert.deepEqual(filterResources(items, { query: "  PROGRAMMING " }).map((x) => x.name), ["Peer Learning Hub"]);
  assert.deepEqual(filterResources(items, { query: "north hall" }).map((x) => x.name), ["Food Pantry"]);
});

test("category and text filters combine and an unmatched query is empty", () => {
  assert.deepEqual(filterResources(items, { query: "tutoring", category: "wellbeing" }), []);
  assert.deepEqual(filterResources(items, { query: "no match" }), []);
});
