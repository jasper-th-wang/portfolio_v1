// Central configuration for project ordering
// This replaces the need for featuredOrder in individual markdown files

// All projects in the order to appear
export const projectOrder = [
  "bob-is-melting",
  "sud",
  "portfolio",
  "dirkinteractive",
  "borrowhood",
  "minutemon",
  "katex",
  "rainmate",
  "ebo",
  "colorful-calc",
  "n-showing",
  "mg-unicorns",
];

// Featured projects in the order they should appear (based on your current featuredOrder)
export const featuredProjects = [
  "bob-is-melting",
  "sud",
  "portfolio",
  "borrowhood",
  "minutemon",
  "katex",
  "dirkinteractive",
  "rainmate",
];

// Helper function to get ordered projects
export function getOrderedProjects(projects, orderArray = projectOrder) {
  return orderArray
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean); // Remove any undefined entries
}

// Helper function to get featured projects in order
export function getFeaturedProjectsInOrder(projects) {
  return getOrderedProjects(projects, featuredProjects);
}
