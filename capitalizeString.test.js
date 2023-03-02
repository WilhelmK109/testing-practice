// Import the capitalize function
const capitalize = require('./capitalizeString');

// Write a test for the capitalize function
test('capitalize should capitalize the first letter of a string', () => {
  // Arrange
  const input = 'hello world';
  const expectedOutput = 'Hello world';

  // Act
  const result = capitalize(input);

  // Assert
  expect(result).toEqual(expectedOutput);
});
