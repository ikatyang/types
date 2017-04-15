import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function lte',
  arguments: [[[`T extends ${S.tOrdered}`], 'a', 'T'], [[`T extends ${S.tOrdered}`], 'b', 'T']],
  returnType: 'boolean',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
  new S.Reference('path', './internal/generals'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));
