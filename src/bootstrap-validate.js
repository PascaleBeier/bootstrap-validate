import validate from './validate';

module.exports = (input, rules) => {
    input.addEventListener('input', () => {
        validate(input, rules)
    });
};