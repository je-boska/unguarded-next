import ArrowLeft from '@/components/ArrowLeft';
import Container from '@/components/Container';
import { getAlbumBySlug, getAlbums } from '@/queries/albums';
import { renderRichTextWithImages } from '@/utils/richText';
import dayjs from 'dayjs';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const album = await getAlbumBySlug(params.slug);

  return (
    <Container>
      <div className='grid lg:grid-cols-[2fr,1fr] mb-8 md:mb-20'>
        <div className='order-2 mt-8 lg:pr-8 md:mt-0 lg:order-1'>
          <div className='text-4xl md:text-6xl font-decay mb-12'>
            <h1 className='mb-2'>{album.fields.artist} /</h1>
            <h1>{album.fields.title}</h1>
          </div>
          <div className='mb-12'>
            <p>Format: {album.fields.format}</p>
            <p>
              Release Date:{' '}
              {dayjs(album.fields.releaseDate).format('DD.MM.YYYY')}
            </p>
            <p>Cat.Nr: {album.fields.catalogueNumber}</p>
            <div className='links block lg:hidden'>
              {album.fields.links
                ? renderRichTextWithImages(album.fields.links)
                : null}
            </div>
          </div>
          <section className='rich-text mb-40'>
            {album.fields.body
              ? renderRichTextWithImages(album.fields.body)
              : null}
          </section>
        </div>
        <div className='order-1 lg:order-2'>
          <Image
            className='mb-8'
            src={'https:' + album.fields.artwork!.fields.file!.url}
            alt=''
            height={album.fields.artwork!.fields.file!.details.image!.height}
            width={album.fields.artwork!.fields.file!.details.image!.width}
          />
          <div className='links hidden lg:block text-right text-xl'>
            {album.fields.links
              ? renderRichTextWithImages(album.fields.links)
              : null}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function generateStaticParams() {
  const albums = await getAlbums();

  return albums.map((item) => ({
    slug: item.fields.slug,
  }));
}
