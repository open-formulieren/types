/**
 * Given a type `T` with optional key(s) `K`, make the key(s) `K` required.
 *
 * The ternary is to force distribution over unions in `T`.
 */
export type Require<T, K extends keyof T> = T extends any
  ? Omit<T, K> & Required<Pick<T, K>>
  : never;
