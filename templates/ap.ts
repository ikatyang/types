import * as S from '../src/index';

const typingsForList = S.createCurriedTypings({
  name: 'function ap',
  generics: ['T', 'U'],
  args: [[`${S.vMorphism}s`, `${S.tMorphism}<T, U>[]`], [S.vList, `${S.tList}<T>`]],
  returnType: `${S.tList}<U>`,
});

const typingsForAppable = S.createCurriedTypings({
  name: 'function ap',
  generics: ['T', 'U'],
  args: [[`${S.vMorphism}s`, `${S.tMorphism}<T, U>[]`], [S.vAppable, `${S.tAppable}<T>`]],
  returnType: `${S.tAppable}<U>`,
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typingsForList).setComment(S.readComment(module)))
  .append(new S.Group().append(...typingsForAppable)));
