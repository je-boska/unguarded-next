import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeAlbumFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  artwork: EntryFieldTypes.AssetLink;
  artist: EntryFieldTypes.EntryLink<TypeArtistSkeleton>;
}

export type TypeAlbumSkeleton = EntrySkeletonType<TypeAlbumFields, 'album'>;
export type TypeAlbum<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeAlbumSkeleton, Modifiers, Locales>;

export interface TypeArtistFields {
  name: EntryFieldTypes.Symbol;
}

export type TypeArtistSkeleton = EntrySkeletonType<TypeArtistFields, 'artist'>;
export type TypeArtist<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeArtistSkeleton, Modifiers, Locales>;

export interface TypePageFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.RichText;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePageSkeleton, Modifiers, Locales>;
