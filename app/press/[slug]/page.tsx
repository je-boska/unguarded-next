import Container from '@/components/Container';
import SinglePage from '@/components/SinglePage';
import { getPressPageBySlug, getPressPages } from '@/queries/pressPages';

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
