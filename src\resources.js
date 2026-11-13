export function filterResources(resources, { query = "", category = "all" } = {}) {
  const term = query.trim().toLocaleLowerCase();
  return resources.filter((resource) => {
    const matchesCategory = category === "all" || resource.category === category;
    const searchable = `${resource.name} ${resource.description} ${resource.location} ${resource.tags.join(" ")}`.toLocaleLowerCase();
    return matchesCategory && (!term || searchable.includes(term));
  });
}
