import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Block, Document, Inline } from '@contentful/rich-text-types';
import { Asset } from 'contentful';
import Image from 'next/image';

const getAssetById = (id: string, assets: Asset[]) =>
  assets.filter((asset) => asset.sys.id === id).pop();

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
  },
};

export function renderRichTextWithImages(document: Document) {
  return documentToReactComponents(document, options);
}
