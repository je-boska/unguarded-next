import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

export function renderRichTextWithImages(document: Document) {
  return <div className='rich-text'>{documentToReactComponents(document)}</div>;
}
