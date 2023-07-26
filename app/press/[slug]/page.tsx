import Container from '@/components/Container';
import { getPressPageBySlug, getPressPages } from '@/queries/pressPages';
import { renderRichTextWithImages } from '@/utils/richText';
import dayjs from 'dayjs';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const pressPage = await getPressPageBySlug(params.slug);

  return (
    <Container>
      <div className='grid lg:grid-cols-[2fr,1fr] mb-8 md:mb-20'>
        <div className='order-2 mt-8 pr-8 md:mt-0 lg:order-1'>
          <div className='text-4xl md:text-6xl font-decay mb-12'>
            <h1 className='mb-2'>{pressPage.fields.artist} /</h1>
            <h1>{pressPage.fields.title}</h1>
          </div>
          <div className='mb-12'>
            <p>Format: {pressPage.fields.format}</p>
            <p>
              Release Date:{' '}
              {dayjs(pressPage.fields.releaseDate).format('DD.MM.YYYY')}
            </p>
            <p>Cat.Nr: {pressPage.fields.catalogueNumber}</p>
            <div className='links block lg:hidden'>
              {pressPage.fields.links
                ? renderRichTextWithImages(pressPage.fields.links)
                : null}
            </div>
          </div>
          <section className='rich-text mb-40'>
            {pressPage.fields.body
              ? renderRichTextWithImages(pressPage.fields.body)
              : null}
          </section>
        </div>
        <div className='order-1 lg:order-2'>
          <Image
            className='mb-8'
            src={'https:' + pressPage.fields.artwork!.fields.file!.url}
            alt=''
            height={
              pressPage.fields.artwork!.fields.file!.details.image!.height
            }
            width={pressPage.fields.artwork!.fields.file!.details.image!.width}
          />
          <div className='links hidden lg:block text-right text-xl'>
            {pressPage.fields.links
              ? renderRichTextWithImages(pressPage.fields.links)
              : null}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function generateStaticParams() {
  const pressPages = await getPressPages();

  return pressPages.map((item) => ({
    slug: item.fields.slug,
  }));
}
