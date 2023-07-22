import Container from '@/components/Container';
import { getAlbums } from '@/queries/albums';

export default async function Releases() {
  const albums = await getAlbums();

  return (
    <Container>
      {albums.items.map(({ fields: { slug, title } }, idx) => (
        <div key={idx}>
          <a href={'/' + slug}>{title}</a>
        </div>
      ))}
    </Container>
  );
}
