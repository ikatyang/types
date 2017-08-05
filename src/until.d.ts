import { Morphism, Predicate } from "./$types";
declare const until: until_000;
type until_000 = {
    <T>(pred: Predicate<T>): until_100<T>;
    <T>(pred: Predicate<T>, fn: Morphism<T, T>): until_110<T>;
    <T>(pred: Predicate<T>, fn: Morphism<T, T>, initial: T): until_111<T>;
};
type until_100<T> = {
    (fn: Morphism<T, T>): until_110<T>;
    (fn: Morphism<T, T>, initial: T): until_111<T>;
};
type until_010<T> = {
    (pred: Predicate<T>): until_110<T>;
    (pred: Predicate<T>, initial: T): until_111<T>;
};
type until_110<T> = {
    (initial: T): until_111<T>;
};
type until_001<T> = {
    (pred: Predicate<T>): until_101<T>;
    (pred: Predicate<T>, fn: Morphism<T, T>): until_111<T>;
};
type until_101<T> = {
    (fn: Morphism<T, T>): until_111<T>;
};
type until_011<T> = {
    (pred: Predicate<T>): until_111<T>;
};
type until_111<T> = T;
export = until;
