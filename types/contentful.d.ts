import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeAlbumFields {
  title: EntryFieldTypes.Symbol;
  artist: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  artwork: EntryFieldTypes.AssetLink;
  format: EntryFieldTypes.Symbol;
  releaseDate: EntryFieldTypes.Date;
  catalogueNumber: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.RichText;
  links?: EntryFieldTypes.RichText;
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

export interface TypeBandcampEmbedFields {
  title: EntryFieldTypes.Symbol;
  link: EntryFieldTypes.Symbol;
  albumNumber: EntryFieldTypes.Symbol;
  tracklist: EntryFieldTypes.Boolean;
}

export type TypeBandcampEmbedSkeleton = EntrySkeletonType<
  TypeBandcampEmbedFields,
  'bandcampEmbed'
>;
export type TypeBandcampEmbed<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBandcampEmbedSkeleton, Modifiers, Locales>;

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

export interface TypePressPageFields {
  title: EntryFieldTypes.Symbol;
  artist: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  artwork: EntryFieldTypes.AssetLink;
  format: EntryFieldTypes.Symbol;
  releaseDate: EntryFieldTypes.Date;
  catalogueNumber: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.RichText;
  links?: EntryFieldTypes.RichText;
}

export type TypePressPageSkeleton = EntrySkeletonType<
  TypePressPageFields,
  'pressPage'
>;
export type TypePressPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypePressPageSkeleton, Modifiers, Locales>;

export interface TypeSoundcloudEmbedFields {
  title?: EntryFieldTypes.Symbol;
  shareLink: EntryFieldTypes.Symbol;
}

export type TypeSoundcloudEmbedSkeleton = EntrySkeletonType<
  TypeSoundcloudEmbedFields,
  'soundcloudEmbed'
>;
export type TypeSoundcloudEmbed<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeSoundcloudEmbedSkeleton, Modifiers, Locales>;

export interface TypeYoutubeEmbedFields {
  title?: EntryFieldTypes.Symbol;
  shareLink: EntryFieldTypes.Symbol;
}

export type TypeYoutubeEmbedSkeleton = EntrySkeletonType<
  TypeYoutubeEmbedFields,
  'youtubeEmbed'
>;
export type TypeYoutubeEmbed<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeYoutubeEmbedSkeleton, Modifiers, Locales>;
