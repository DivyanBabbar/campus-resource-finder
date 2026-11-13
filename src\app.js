import { resources } from "./seed.js";
import { filterResources } from "./resources.js";

const search = document.querySelector("#search");
const category = document.querySelector("#category");
const results = document.querySelector("#results");
const status = document.querySelector("#result-status");

function render() {
  const matches = filterResources(resources, { query: search.value, category: category.value });
  results.replaceChildren();
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No resources match those filters. Try a different search or category.";
    results.append(empty);
  }
  for (const resource of matches) {
    const card = document.createElement("article");
    card.className = "resource-card";
    const title = document.createElement("h2");
    title.textContent = resource.name;
    const description = document.createElement("p");
    description.textContent = resource.description;
    const details = document.createElement("p");
    details.textContent = `${resource.categoryLabel} · ${resource.location} · ${resource.hours}`;
    const tags = document.createElement("p");
    tags.className = "tags";
    tags.textContent = resource.tags.join(" · ");
    card.append(title, description, details, tags);
    results.append(card);
  }
  status.textContent = `${matches.length} ${matches.length === 1 ? "resource" : "resources"} found`;
}

search.addEventListener("input", render);
category.addEventListener("change", render);
render();
