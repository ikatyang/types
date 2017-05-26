import * as dts from 'dts-element';
import {
  get_curried_function_parameter_placeholder_name,
  get_curried_function_type_name,
  placeholder_name_abbr,
} from '../constants';
import {create_masks} from './create-masks';
import {create_selectable_signatures} from './create-selectable-signatures';
import {has} from './has';
import {push_signatures} from './push-signatures';

const is_type_predicate = (element?: dts.IElement<any>): element is dts.ITypePredicate =>
  (element !== undefined) && (element.kind === dts.ElementKind.TypePredicate);

export const create_curried_types = (name: string, type: dts.IFunctionType, selectable = true) => {
  const {
    generics = [],
    parameters = [],
    return: return_type,
  } = type;

  if (is_type_predicate(return_type)) {
    throw new Error('Not support TypePredicate');
  }

  const placeholders = parameters.map(parameter =>
    dts.create_parameter_declaration({
      name: get_curried_function_parameter_placeholder_name(parameter.name),
      type: dts.create_general_type({name: placeholder_name_abbr}),
    }),
  );

  const parameters_generics = parameters.map(parameter =>
    generics.filter(
      generic => has(parameter, {
        kind: dts.ElementKind.GeneralType,
        name: generic.name,
      }),
    ),
  );

  const target_types = [...new Array(2 ** parameters.length)].map((_, index, array) =>
    (index === array.length - 1)
      ? return_type
      : dts.create_object_type({members: []}),
  );

  const masks = create_masks(parameters.length);
  const reverse_masks = masks.reduce<{[mask: string]: number}>(
    (current_reverse_masks, mask, index) => ({...current_reverse_masks, [mask]: index}),
    {},
  );

  const type_declarations = target_types.map((target_type, index) => {
    const type_generics = parameters_generics
      .filter((_, generics_index) => masks[index][generics_index] === '1')
      .reduce(
        // tslint:disable-next-line:ter-indent
        (current_type_generics, filtered_parameter_generics) =>
          [...new Set<dts.IGenericDeclaration>(current_type_generics.concat(filtered_parameter_generics))],
        [],
      )
      .sort((a, b) => generics.indexOf(a) - generics.indexOf(b));
    return dts.create_type_declaration({
      name: get_curried_function_type_name(name, masks[index]),
      generics: type_generics,
      type: target_type,
    });
  });

  type_declarations.slice(0, -1).forEach((type_declaration, index) => {
    const members = (type_declaration.type as dts.IObjectType).members as dts.IObjectMember[];
    push_signatures(
      parameters.filter((_, param_index) => masks[index][param_index] === '0'),
      placeholders.filter((_, param_index) => masks[index][param_index] === '0'),
      (used_parameters, return_parameters) => {
        const return_mask = parameters
            .map(parameter =>
              (return_parameters.indexOf(parameter) === -1)
                ? '1'
                : '0')
            .join('');
        const return_type_declaration = type_declarations[reverse_masks[return_mask]];
        const return_type_generics = return_type_declaration.generics!
          .map(generic => dts.create_general_type({name: generic.name}));
        members.push(
          dts.create_object_member({
            owned: dts.create_function_declaration({
              name: undefined,
              type: dts.create_function_type({
                generics: return_type_declaration.generics!.filter(generic =>
                  type_declaration.generics!.indexOf(generic) === -1),
                parameters: used_parameters,
                return: dts.create_general_type({
                  name: return_type_declaration.name,
                  generics: return_type_generics,
                }),
              }),
            }),
          }),
        );
      },
    );
    if (selectable && members.length > 1) {
      members.splice(-1, 0, ...create_selectable_signatures(members));
    }
  });

  return type_declarations;
};