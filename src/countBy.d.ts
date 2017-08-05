import { Dictionary, List, Morphism, Property } from "./$types";
declare const countBy: countBy_00;
type countBy_00 = {
    <T>(fn: Morphism<T, Property>): countBy_10<T>;
    <T>(fn: Morphism<T, Property>, list: List<T>): countBy_11;
};
type countBy_10<T> = {
    (list: List<T>): countBy_11;
};
type countBy_01<T> = {
    (fn: Morphism<T, Property>): countBy_11;
};
type countBy_11 = Dictionary<number>;
export = countBy;
