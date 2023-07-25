import ArrowLeft from '@/components/ArrowLeft';
import Container from '@/components/Container';
import { getPressPageBySlug, getPressPages } from '@/queries/pressPages';
import { renderRichTextWithImages } from '@/utils/richText';
import dayjs from 'dayjs';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const pressPage = await getPressPageBySlug(params.slug);

  return (
    <>
      <Container>
        <section className='grid md:grid-cols-2 xl:grid-cols-[2fr,1fr] mb-8 md:mb-20'>
          <div className='order-2 mt-8 pr-16 md:mt-0 md:order-1'>
            <div className='text-4xl md:text-6xl font-decay mb-8'>
              <h1 className='mb-2'>{pressPage.fields.artist} /</h1>
              <h1>{pressPage.fields.title}</h1>
            </div>
            <div>
              <p>Format: {pressPage.fields.format}</p>
              <p>
                Release Date:{' '}
                {dayjs(pressPage.fields.releaseDate).format('DD.MM.YYYY')}
              </p>
              <p>Cat.Nr: {pressPage.fields.catalogueNumber}</p>
            </div>
          </div>
          <div className='order-1 md:order-2'>
            <Image
              src={'https:' + pressPage.fields.artwork!.fields.file!.url}
              alt=''
              height={
                pressPage.fields.artwork!.fields.file!.details.image!.height
              }
              width={
                pressPage.fields.artwork!.fields.file!.details.image!.width
              }
            />
          </div>
        </section>
        <section className='rich-text mb-40'>
          {pressPage.fields.body
            ? renderRichTextWithImages(pressPage.fields.body)
            : null}
        </section>
        <section className='flex justify-center text-center'>
          <div className='links'>
            {pressPage.fields.links
              ? renderRichTextWithImages(pressPage.fields.links)
              : null}
          </div>
        </section>
        <div className='mb-80 flex items-center justify-center'>
          <ArrowLeft />
          <a href='/releases' className='ml-4 font-decay text-4xl md:text-5xl'>
            Releases
          </a>
        </div>
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  const pressPages = await getPressPages();

  return pressPages.map((item) => ({
    slug: item.fields.slug,
  }));
}
