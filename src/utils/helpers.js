export function capitalize(input) {
  if (!input.length) return null;
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
