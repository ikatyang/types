import { Lens, Morphism } from "./$types";
declare const over: over_000;
type over_000 = {
    <T, U>(lens: Lens<T, U>): over_100<T, U>;
    <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>): over_110<T, U>;
    <T, U>(lens: Lens<T, U>, fn: Morphism<T, T>, target: U): over_111<U>;
};
type over_100<T, U> = {
    (fn: Morphism<T, T>): over_110<T, U>;
    (fn: Morphism<T, T>, target: U): over_111<U>;
};
type over_010<T> = {
    <U>(lens: Lens<T, U>): over_110<T, U>;
    <U>(lens: Lens<T, U>, target: U): over_111<U>;
};
type over_110<T, U> = {
    (target: U): over_111<U>;
};
type over_001<U> = {
    <T>(lens: Lens<T, U>): over_101<T, U>;
    <T>(lens: Lens<T, U>, fn: Morphism<T, T>): over_111<U>;
};
type over_101<T, U> = {
    (fn: Morphism<T, T>): over_111<U>;
};
type over_011<T, U> = {
    (lens: Lens<T, U>): over_111<U>;
};
type over_111<U> = U;
export = over;
