/**
 * Build a static asset URL that respects the app's base path.
 * Handles both root and non-root deployments correctly.
 * 
 * @param path - Asset path relative to public/ (e.g., "assets/gallery/photo.jpg")
 * @returns Full URL with BASE_URL prefix
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
