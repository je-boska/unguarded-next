import Container from '@/components/Container';
import { getAlbums } from '@/queries/albums';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Unguarded | Releases',
};

export default async function Releases() {
  const albums = await getAlbums();

  return (
    <Container>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-40'>
        {albums.map(({ fields: { slug, title, artist, artwork } }, idx) => (
          <div key={idx} className='group relative'>
            <a href={'/releases/' + slug}>
              <Image
                className='w-full'
                src={'http:' + artwork!.fields!.file!.url}
                alt=''
                width={artwork!.fields.file!.details.image!.height}
                height={artwork!.fields.file!.details.image!.height}
              />
              <div className='my-4 font-decay text-2xl'>
                {' '}
                {artist} /
                <br />
                {title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}

export const revalidate = 60;
