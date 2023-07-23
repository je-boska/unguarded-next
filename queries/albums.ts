import { TypeAlbumSkeleton, TypeArtistSkeleton } from '@/types/contentful';
import { client } from './client';

export async function getAlbums() {
  const albums =
    await client.withoutUnresolvableLinks.getEntries<TypeAlbumSkeleton>({
      content_type: 'album',
      include: 3,
    });
  return albums;
}

export async function getAlbumBySlug(slug: string) {
  const albums =
    await client.withoutUnresolvableLinks.getEntries<TypeAlbumSkeleton>({
      limit: 1,
      include: 3,
      content_type: 'album',
      'fields.slug': slug,
    });

  return albums.items[0];
}
