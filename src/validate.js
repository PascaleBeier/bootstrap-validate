import availableRules from './rules';
import errors from './errors';

/**
 * @param input HTMLInputElementesl
 * @param rule string
 */
module.exports = (input, rule) => {
  rule.split('|').forEach((item) => {
    const constraint = item.split(':');
    errors(
          input,
          constraint[0],
          availableRules[constraint[0]](input, constraint[1]),
          constraint[2],
      );
  });
};

