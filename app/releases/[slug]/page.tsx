import SinglePage from '@/components/SinglePage';
import { getAlbumBySlug, getAlbums } from '@/queries/albums';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const album = await getAlbumBySlug(params.slug);
  return {
    title: 'Unguarded | ' + album.fields.title,
  };
}

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
