import { Document } from '@contentful/rich-text-types';

export interface Content {
  json: Document;
  links?: Links;
}

export interface Asset {
  sys: { id: string };
  contentType: string;
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
}
