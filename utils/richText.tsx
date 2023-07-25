import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  BLOCKS,
  Block,
  Document,
  Hyperlink,
  INLINES,
  Inline,
} from '@contentful/rich-text-types';
import Image from 'next/image';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      return (
        <Image
          src={'http:' + node.data.target.fields.file.url}
          alt=''
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
        />
      );
    },
    [INLINES.HYPERLINK]: (node: any) => {
      if (node.data.uri.includes('https://youtu.be')) {
        return (
          <div className='iframe-container'>
            <iframe
              src={`https://www.youtube.com/embed/${node.data.uri.slice(-11)}`}
              allowFullScreen
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>
        );
      }
      return <a href={node.data.uri}>{node.content[0].value}</a>;
    },
  },
};

export function renderRichTextWithImages(document: Document) {
  return documentToReactComponents(document, options);
}
