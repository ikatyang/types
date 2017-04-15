import * as S from '../src/index';

const typings = S.createCurriedFunctions({
  name: 'function bind',
  arguments: [[['T extends Function'], 'fn', 'T'], [[], 'context', 'any']],
  returnType: 'T',
});

export default new S.Definition([
  new S.Reference('path', './internal/curried-functions'),
], new S.Namespace(S.namespace)
  .append(new S.Group().append(...typings).setComment(S.readComment(module))));