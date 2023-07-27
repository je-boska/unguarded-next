import ArrowLeft from '@/components/ArrowLeft';
import Container from '@/components/Container';
import SinglePage from '@/components/SinglePage';
import { getAlbumBySlug, getAlbums } from '@/queries/albums';

export default async function Page({ params }: { params: { slug: string } }) {
  const album = await getAlbumBySlug(params.slug);

  return <SinglePage pageData={album} />;
}

export async function generateStaticParams() {
  const albums = await getAlbums();

  return albums.map((item) => ({
    slug: item.fields.slug,
  }));
}
