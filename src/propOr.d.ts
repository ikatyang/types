import { List, Property } from "./$types";
/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
declare const propOr: propOr_000;
type propOr_000 = {
    <D>(defaults: D): propOr_keyof_100<D>;
    <D>(defaults: D): propOr_record_100<D>;
    (defaults: any): propOr_general_100;
    <D, T, K extends keyof T>(defaults: D, key: K): propOr_keyof_110<D, T, K>;
    <D, K extends string>(defaults: D, key: K): propOr_record_110<D, K>;
    (defaults: any, key: Property): propOr_general_110;
    <D, T, K extends keyof T>(defaults: D, key: K, object: T): propOr_keyof_111<D, T, K>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): propOr_record_111<D, K, T>;
    <$SEL extends "1", $KIND extends "keyof">(): <D>(defaults: D) => propOr_keyof_100<D>;
    <$SEL extends "1", $KIND extends "record">(): <D>(defaults: D) => propOr_record_100<D>;
    <$SEL extends "1", $KIND extends "general">(): (defaults: any) => propOr_general_100;
    <$SEL extends "11", $KIND extends "keyof">(): <D, T, K extends keyof T>(defaults: D, key: K) => propOr_keyof_110<D, T, K>;
    <$SEL extends "11", $KIND extends "record">(): <D, K extends string>(defaults: D, key: K) => propOr_record_110<D, K>;
    <$SEL extends "11", $KIND extends "general">(): (defaults: any, key: Property) => propOr_general_110;
    <$SEL extends "111", $KIND extends "keyof">(): <D, T, K extends keyof T>(defaults: D, key: K, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "111", $KIND extends "record">(): <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "111", $KIND extends "general">(): (defaults: any, key: Property, object: {}) => propOr_general_111;
    (defaults: any, key: Property, object: {}): propOr_general_111;
};
type propOr_keyof_100<D> = {
    <T, K extends keyof T>(key: K): propOr_keyof_110<D, T, K>;
    <$SEL extends "1">(): <T, K extends keyof T>(key: K) => propOr_keyof_110<D, T, K>;
    <$SEL extends "11">(): <T, K extends keyof T>(key: K, object: T) => propOr_keyof_111<D, T, K>;
    <T, K extends keyof T>(key: K, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_100<D> = {
    <K extends string>(key: K): propOr_record_110<D, K>;
    <$SEL extends "1">(): <K extends string>(key: K) => propOr_record_110<D, K>;
    <$SEL extends "11">(): <K extends string, T extends Record<K, any>>(key: K, object: T) => propOr_record_111<D, K, T>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_100 = {
    (key: Property): propOr_general_110;
    <$SEL extends "1">(): (key: Property) => propOr_general_110;
    <$SEL extends "11">(): (key: Property, object: {}) => propOr_general_111;
    (key: Property, object: {}): propOr_general_111;
};
type propOr_keyof_010<T, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_110<D, T, K>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_keyof_110<D, T, K>;
    <$SEL extends "11">(): <D>(defaults: D, object: T) => propOr_keyof_111<D, T, K>;
    <D>(defaults: D, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_010<K extends string> = {
    <D>(defaults: D): propOr_record_110<D, K>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_record_110<D, K>;
    <$SEL extends "11">(): <D, T extends Record<K, any>>(defaults: D, object: T) => propOr_record_111<D, K, T>;
    <D, T extends Record<K, any>>(defaults: D, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_010 = {
    (defaults: any): propOr_general_110;
    <$SEL extends "1">(): (defaults: any) => propOr_general_110;
    <$SEL extends "11">(): (defaults: any, object: {}) => propOr_general_111;
    (defaults: any, object: {}): propOr_general_111;
};
type propOr_keyof_110<D, T, K extends keyof T> = {
    (object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_110<D, K extends string> = {
    <T extends Record<K, any>>(object: T): propOr_record_111<D, K, T>;
};
type propOr_general_110 = {
    (object: {}): propOr_general_111;
};
type propOr_keyof_001<T> = {
    <D>(defaults: D): propOr_keyof_101<D, T>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_keyof_101<D, T>;
    <$SEL extends "11">(): <D, K extends keyof T>(defaults: D, key: K) => propOr_keyof_111<D, T, K>;
    <D, K extends keyof T>(defaults: D, key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_001<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_101<D, K, T>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_record_101<D, K, T>;
    <$SEL extends "11">(): <D>(defaults: D, key: K) => propOr_record_111<D, K, T>;
    <D>(defaults: D, key: K): propOr_record_111<D, K, T>;
};
type propOr_general_001 = {
    (defaults: any): propOr_general_101;
    <$SEL extends "1">(): (defaults: any) => propOr_general_101;
    <$SEL extends "11">(): (defaults: any, key: Property) => propOr_general_111;
    (defaults: any, key: Property): propOr_general_111;
};
type propOr_keyof_101<D, T> = {
    <K extends keyof T>(key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_101<D, K extends string, T extends Record<K, any>> = {
    (key: K): propOr_record_111<D, K, T>;
};
type propOr_general_101 = {
    (key: Property): propOr_general_111;
};
type propOr_keyof_011<T, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_111<D, T, K>;
};
type propOr_record_011<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_111<D, K, T>;
};
type propOr_general_011 = {
    (defaults: any): propOr_general_111;
};
type propOr_keyof_111<D, T, K extends keyof T> = T[K] | D;
type propOr_record_111<D, K extends string, T extends Record<K, any>> = T[K] | D;
type propOr_general_111 = any;
export = propOr;
