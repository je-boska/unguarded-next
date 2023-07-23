import Container from '@/components/Container';
import { getAlbums } from '@/queries/albums';
import Image from 'next/image';

export default async function Releases() {
  const albums = await getAlbums();

  return (
    <Container>
      <div className='grid md:grid-cols-2 gap-4'>
        {albums.items.map(
          ({ fields: { slug, title, artist, artwork } }, idx) => (
            <div key={idx} className='group relative'>
              <a href={'/releases/' + slug}>
                <div className='absolute -z-10 group-hover:z-20 w-full h-full flex text-center items-center justify-center font-decay text-2xl md:text-4xl'>
                  {artist}
                  <br />
                  {title}
                </div>
                <div className='bg-black opacity-20 h-full w-full absolute -z-10 group-hover:z-10' />
                <Image
                  className='w-full'
                  src={'http:' + artwork!.fields!.file!.url}
                  alt=''
                  width={artwork!.fields.file!.details.image!.height}
                  height={artwork!.fields.file!.details.image!.height}
                />
              </a>
            </div>
          )
        )}
      </div>
    </Container>
  );
}
