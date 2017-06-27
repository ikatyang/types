import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
declare const intersection: intersection_00;
type intersection_00 = {
    <T>(a: List<T>, b: List<T>): intersection_11<T>;
    <T>(a: List<T>): intersection_10<T>;
};
type intersection_10<T> = {
    (b: List<T>): intersection_11<T>;
};
type intersection_01<T> = {
    (a: List<T>): intersection_11<T>;
};
type intersection_11<T> = T[];
export = intersection;
