import SinglePage from '@/components/SinglePage';
import { getPressPageBySlug, getPressPages } from '@/queries/pressPages';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const album = await getPressPageBySlug(params.slug);
  return {
    title: 'Unguarded | ' + album.fields.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pressPage = await getPressPageBySlug(params.slug);

  return <SinglePage pageData={pressPage} />;
}

export async function generateStaticParams() {
  const pressPages = await getPressPages();

  return pressPages.map((item) => ({
    slug: item.fields.slug,
  }));
}
