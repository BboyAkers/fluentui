import hashString from '@emotion/hash';
import { HASH_PREFIX } from '../../constants';

export interface HashedClassNameParts {
  property: string;
  value: string;
  pseudo: string;
  media: string;
  support: string;
}

export function hashClassName({ media, property, pseudo, support, value }: HashedClassNameParts): string {
  // Trimming of value is required to generate consistent hashes
  const classNameHash = hashString(pseudo + media + support + property + value.trim());

  return HASH_PREFIX + classNameHash;
}
