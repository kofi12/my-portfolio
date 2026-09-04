import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';
import { LIBRARY_PATH, PUBLISHED, failureModePath } from '../content/what-goes-wrong';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, priority: 1 },
    { url: `${SITE_URL}${LIBRARY_PATH}`, lastModified, priority: 0.8 },
    ...PUBLISHED.map((mode) => ({ url: `${SITE_URL}${failureModePath(mode.slug)}`, lastModified, priority: 0.7 })),
  ];
}
