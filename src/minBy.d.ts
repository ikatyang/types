import { Morphism, Ordered } from "./$types";
declare const minBy: minBy_000;
type minBy_000 = {
    <T>(fn: Morphism<T, Ordered>): minBy_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): minBy_110<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): minBy_111<T>;
};
type minBy_100<T> = {
    (a: T): minBy_110<T>;
    (a: T, b: T): minBy_111<T>;
};
type minBy_010<T> = {
    (fn: Morphism<T, Ordered>): minBy_110<T>;
    (fn: Morphism<T, Ordered>, b: T): minBy_111<T>;
};
type minBy_110<T> = {
    (b: T): minBy_111<T>;
};
type minBy_001<T> = {
    (fn: Morphism<T, Ordered>): minBy_101<T>;
    (fn: Morphism<T, Ordered>, a: T): minBy_111<T>;
};
type minBy_101<T> = {
    (a: T): minBy_111<T>;
};
type minBy_011<T> = {
    (fn: Morphism<T, Ordered>): minBy_111<T>;
};
type minBy_111<T> = T;
export = minBy;
