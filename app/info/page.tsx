import Container from '@/components/Container';
import getInfoPage from '@/queries/info';
import { renderRichTextWithImages } from '@/utils/rich-text';

export default async function Info() {
  const info = await getInfoPage();

  return (
    <Container>
      {info.fields.body ? renderRichTextWithImages(info.fields.body) : null}
    </Container>
  );
}
