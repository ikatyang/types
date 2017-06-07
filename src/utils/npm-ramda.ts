import * as R from 'ramda';

// https://github.com/types/npm-ramda/blob/master/scripts.js

// tslint:disable:max-line-length

const nm = (cnt: number, fn: (v: number) => string) => R.range(0, cnt).map(fn).join(', ');

export function composeDef(i: number, j: number) {
  const vals = nm(j, n => `V${n}`);
  const pars = nm(j, n => `x${n}: V${n}`);
  const fns = nm(i - 1, n => `fn${i - 1 - n}: (x: T${i - 1 - n}) => T${i - n}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function compose<${vals}, ${types}>(${fns}${i > 1 ? ', ' : ''}fn0: (${pars}) => T1): (${pars}) => T${i};`;
}

export function composeKDef(i: number) {
  const fns = nm(i - 1, n => `fn${i - 1 - n}: (x: T${i - 1 - n}) => Chain<T${i - n}>`);
  const types = nm(i, n => `T${n + 1}`);
  return `function composeK<V, ${types}>(${fns}${i > 1 ? ', ' : ''}fn0: (v: Chain<V>) => Chain<T1>): (v: V) => Chain<T${i}>;`;
}

export function composePDef(i: number, j: number) {
  const vals = nm(j, n => `V${n}`);
  const pars = nm(j, n => `x${n}: V${n}`);
  const fns = nm(i - 1, n => `fn${i - 1 - n}: (x: T${i - 1 - n}) => Promise<T${i - n}>|T${i - n}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function composeP<${vals}, ${types}>(${fns}${i > 1 ? ', ' : ''}fn0: (${pars}) => Promise<T1>): (${pars}) => Promise<T${i}>;`;
}

const alphabets = 26;
const letters = (idx: number) => (n: number) => R.range(idx, idx + R.clamp(0, alphabets, n)).map(i => String.fromCharCode(i));
const lower = letters('a'.charCodeAt(0));
export function curryDef(i: number) {
  const lows = lower(i);
  const pars = nm(i, n => `${lows[n]}: T${n + 1}`);
  const types = nm(i, n => `T${n + 1}`);
  return `function curry<${types}, TResult>(fn: (${pars}) => TResult): CurriedFunction${i}<${types}, TResult>;`;
}

export function liftDef(i: number) {
  const pars = nm(i, n => `v${n + 1}: T${n + 1}`);
  const listPars = nm(i, n => `v${n + 1}: List<T${n + 1}>`);
  const types = nm(i, n => `T${n + 1}`);
  return `function lift<${types}, TResult>(fn: (${pars}) => TResult): (${listPars}) => TResult[];`;
}
