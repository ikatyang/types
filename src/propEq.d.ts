import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
declare const propEq: propEq_000;
type propEq_000 = {
    (key: Property, _value: PH, object: any): propEq_101;
    (_key: PH, value: any, object: any): propEq_011;
    (_key: PH, _value: PH, object: any): propEq_001;
    (key: Property, value: any, object: any): propEq_111;
    (_key: PH, value: any): propEq_010;
    (key: Property, value: any): propEq_110;
    (key: Property): propEq_100;
};
type propEq_100 = {
    (_value: PH, object: any): propEq_101;
    (value: any, object: any): propEq_111;
    (value: any): propEq_110;
};
type propEq_010 = {
    (_key: PH, object: any): propEq_011;
    (key: Property, object: any): propEq_111;
    (key: Property): propEq_110;
};
type propEq_110 = {
    (object: any): propEq_111;
};
type propEq_001 = {
    (_key: PH, value: any): propEq_011;
    (key: Property, value: any): propEq_111;
    (key: Property): propEq_101;
};
type propEq_101 = {
    (value: any): propEq_111;
};
type propEq_011 = {
    (key: Property): propEq_111;
};
type propEq_111 = boolean;
export = propEq;
