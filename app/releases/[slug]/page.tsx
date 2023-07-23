import Container from '@/components/Container';
import { getAlbumBySlug, getAlbums, getArtistById } from '@/queries/albums';

export default async function Page({ params }: { params: { slug: string } }) {
  const album = await getAlbumBySlug(params.slug);

  return (
    <Container>
      <h1>
        {album.fields.artist!.fields.name}
        <br />
        {album.fields.title}
      </h1>
    </Container>
  );
}

export async function generateStaticParams() {
  const albums = await getAlbums();

  return albums.items.map((item) => ({
    slug: item.fields.slug,
  }));
}
