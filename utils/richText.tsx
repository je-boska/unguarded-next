import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, Document, Inline } from '@contentful/rich-text-types';
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
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
      if (node.data.target.sys.contentType.sys.id === 'youtubeEmbed') {
        return (
          <div className='youtube-iframe-container'>
            <iframe
              src={`https://www.youtube.com/embed/${node.data.target.fields.shareLink.slice(
                -11
              )}`}
              allowFullScreen
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>
        );
      }
      if (node.data.target.sys.contentType.sys.id === 'soundcloudEmbed') {
        return (
          <div className='soundcloud-iframe-container'>
            <iframe
              width='100%'
              height='450'
              allow='autoplay'
              src={node.data.target.fields.shareLink}
            ></iframe>
          </div>
        );
      }
      return <div>Embed failed</div>;
    },
  },
};

export function renderRichTextWithImages(document: Document) {
  return documentToReactComponents(document, options);
}
