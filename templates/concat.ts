import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function concat',
  arguments: [[['T'], `${S.vArray}1`, `T[]`], [['U'], `${S.vArray}2`, `U[]`]],
  returnType: '(T | U)[]',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));
