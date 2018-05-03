import { divisible } from '../../src/rules';

describe('divisible', () => {
  const input = document.createElement('input');
  const validInput = 15;
  const invalidInput = 4;

  it('should return true if input can be divided through 3', () => {
    input.value = validInput;
    expect(divisible(input, 3)).toBeTruthy();
  });

  it('should return false if method is invoked and returns false', () => {
    input.value = invalidInput;
    expect(divisible(input, 3)).toBeFalsy();
  });
});
