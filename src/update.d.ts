import { List } from "./$types";
declare const update: update_000;
type update_000 = {
    (index: number): update_100;
    <T>(index: number, value: T): update_110<T>;
    <T, U>(index: number, value: T, list: List<U>): update_111<T, U>;
};
type update_100 = {
    <T>(value: T): update_110<T>;
    <T, U>(value: T, list: List<U>): update_111<T, U>;
};
type update_010<T> = {
    (index: number): update_110<T>;
    <U>(index: number, list: List<U>): update_111<T, U>;
};
type update_110<T> = {
    <U>(list: List<U>): update_111<T, U>;
};
type update_001<U> = {
    (index: number): update_101<U>;
    <T>(index: number, value: T): update_111<T, U>;
};
type update_101<U> = {
    <T>(value: T): update_111<T, U>;
};
type update_011<T, U> = {
    (index: number): update_111<T, U>;
};
type update_111<T, U> = (T | U)[];
export = update;
