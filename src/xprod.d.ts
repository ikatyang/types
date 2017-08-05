import { List } from "./$types";
declare const xprod: xprod_00;
type xprod_00 = {
    <T>(a: List<T>): xprod_10<T>;
    <T, U>(a: List<T>, b: List<U>): xprod_11<T, U>;
};
type xprod_10<T> = {
    <U>(b: List<U>): xprod_11<T, U>;
};
type xprod_01<U> = {
    <T>(a: List<T>): xprod_11<T, U>;
};
type xprod_11<T, U> = [T, U][];
export = xprod;
