import Container from '@/components/Container';
import getInfoPage from '@/queries/info';
import { renderRichTextWithImages } from '@/utils/richText';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unguarded | Info',
};

export default async function Info() {
  const info = await getInfoPage();

  return (
    <Container className='rich-text mb-40'>
      {info.fields.body ? renderRichTextWithImages(info.fields.body) : null}
    </Container>
  );
}
