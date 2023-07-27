import { Entry } from 'contentful';
import { TypeAlbumSkeleton, TypePressPageSkeleton } from './contentful';

type SinglePageData =
  | Entry<TypePressPageSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<TypeAlbumSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>;
