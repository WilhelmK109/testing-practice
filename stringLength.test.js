const stringLength = require('./stringLength');

// Test for stringLength function
test('stringLength returns the correct character count', () => {
  expect(stringLength('Hello World')).toBe(11);
  expect(stringLength('')).toBe(0);
  expect(stringLength('1234567890')).toBe(10);
});

test('throws an error if string is less than 1 character long', () => {
  expect(() => stringLength('')).toThrow('String must be at least 1 character long');
});
    
test('throws an error if string is longer than 10 characters', () => {
  expect(() => stringLength('12345678901')).toThrow('String must not be longer than 10 characters');
});