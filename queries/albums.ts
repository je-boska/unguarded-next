import { TypeAlbumSkeleton, TypeArtistSkeleton } from '@/types/contentful';
import { client } from './client';

export async function getAlbums() {
  const albums = await client.getEntries<TypeAlbumSkeleton>({
    content_type: 'album',
  });
  return albums;
}

export async function getAlbumBySlug(slug: string) {
  const albums = await client.getEntries<TypeAlbumSkeleton>({
    limit: 1,
    include: 3,
    content_type: 'album',
    'fields.slug': slug,
  });

  return albums.items[0];
}

export async function getArtistById(id: string) {
  const artist = await client.getEntry<TypeArtistSkeleton>(id);

  return artist;
}
