const reverseString = require('./reverseString');

// Test for reverseString function
describe('reverseString', () => {
  test('reverses a given string', () => {
    const originalString = 'hello';
    const reversedString = reverseString(originalString);

    expect(reversedString).toEqual('olleh');
  });
});