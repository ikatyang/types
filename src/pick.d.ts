import { List, Property } from "./$types";
/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
declare const pick: pick_00;
type pick_00 = {
    <T>(keys: List<Property>, object: T): pick_remain_11<T>;
    <V>(keys: List<Property>, object: any): pick_manual_11<V>;
    (keys: List<Property>): pick_10;
};
type pick_10 = {
    <T>(object: T): pick_remain_11<T>;
    <V>(object: any): pick_manual_11<V>;
};
type pick_remain_01<T> = {
    (keys: List<Property>): pick_remain_11<T>;
};
type pick_manual_01 = {
    <V>(keys: List<Property>): pick_manual_11<V>;
};
type pick_remain_11<T> = T;
type pick_manual_11<V> = V;
export = pick;
