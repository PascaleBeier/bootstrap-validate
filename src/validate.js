import availableRules from './rules';
import errors from './errors';

/**
 * @param input HTMLInputElement
 * @param rule string
 */
module.exports = (input, rule) => {
    let rules = rule.split('|');
    for (let rule of rules) {
        let constraint = rule.split(':');
        errors(
            input,
            constraint[0],
            availableRules[constraint[0]](input, constraint[1]),
            constraint[2]
        );
    }
};


