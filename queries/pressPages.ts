import { TypePressPageSkeleton } from '@/types/contentful';
import { client } from './client';

export async function getPressPages() {
  const pressPages =
    await client.withoutUnresolvableLinks.getEntries<TypePressPageSkeleton>({
      content_type: 'pressPage',
      include: 3,
    });

  return pressPages.items.sort((a, b) =>
    a.fields.releaseDate < b.fields.releaseDate ? 1 : -1
  );
}

export async function getPressPageBySlug(slug: string) {
  const pressPages =
    await client.withoutUnresolvableLinks.getEntries<TypePressPageSkeleton>({
      limit: 1,
      include: 3,
      content_type: 'pressPage',
      'fields.slug': slug,
    });

  return pressPages.items[0];
}
