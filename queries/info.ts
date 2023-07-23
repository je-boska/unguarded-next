import { TypePageSkeleton } from '@/types/contentful';
import { client } from './client';

export default async function getInfoPage() {
  const page = await client.getEntry<TypePageSkeleton>(
    '5wXdxY6bNfi4rtOiKklI2g'
  );

  return page;
}
