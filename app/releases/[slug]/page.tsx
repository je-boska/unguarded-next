import Container from '@/components/Container';
import { getAlbumBySlug, getAlbums } from '@/queries/albums';
import { renderRichTextWithImages } from '@/utils/richText';
import dayjs from 'dayjs';
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
  const album = await getAlbumBySlug(params.slug);
  console.log(album.fields.artwork?.fields.file?.details.image?.height);
  return (
    <Container>
      <section className='grid md:grid-cols-2 mb-8 md:mb-20'>
        <div className='order-2 mt-8 pr-16 md:mt-0 md:order-1'>
          <div className='text-4xl md:text-6xl font-decay mb-8'>
            <h1 className='mb-2'>{album.fields.artist}</h1>
            <h1>{album.fields.title}</h1>
          </div>
          <div>
            <p>Format: {album.fields.format}</p>
            <p>
              Release Date:{' '}
              {dayjs(album.fields.releaseDate).format('DD.MM.YYYY')}
            </p>
            <p>Cat.Nr: {album.fields.catalogueNumber}</p>
          </div>
        </div>
        <div className='order-1 md:order-2'>
          <Image
            src={'https:' + album.fields.artwork!.fields.file!.url}
            alt=''
            height={album.fields.artwork!.fields.file!.details.image!.height}
            width={album.fields.artwork!.fields.file!.details.image!.width}
          />
        </div>
      </section>
      <section className='mb-40'>
        {album.fields.body ? renderRichTextWithImages(album.fields.body) : null}
      </section>
    </Container>
  );
}

export async function generateStaticParams() {
  const albums = await getAlbums();

  return albums.map((item) => ({
    slug: item.fields.slug,
  }));
}
