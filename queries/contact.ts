import { TypePageSkeleton } from '@/types/contentful';
import { client } from './client';

export default async function getContactPage() {
  const page = await client.getEntry<TypePageSkeleton>(
    '2pKBXLlZx1dO6BpyLYXBhn'
  );

  return page;
}
