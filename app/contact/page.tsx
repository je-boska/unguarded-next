import Container from '@/components/Container';
import getContactPage from '@/queries/contact';
import { renderRichTextWithImages } from '@/utils/richText';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unguarded | Contact',
};

export default async function Contact() {
  const contact = await getContactPage();

  return (
    <Container className='mb-40'>
      {contact.fields.body
        ? renderRichTextWithImages(contact.fields.body)
        : null}
    </Container>
  );
}
