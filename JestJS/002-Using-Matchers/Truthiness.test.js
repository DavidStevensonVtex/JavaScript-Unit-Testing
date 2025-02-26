// Truthiness

// In tests, you sometimes need to distinguish between undefined, null, and false, but you 
// sometimes do not want to treat these differently. Jest contains helpers that let you be 
// explicit about what you want.

// • toBeNull matches only null

// • toBeUndefined matches only undefined

// • toBeDefined is the opposite of toBeUndefined

// • toBeTruthy matches anything that an if statement treats as true

// • toBeFalsy matches anything that an if statement treats as false

// For example:

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// You should use the matcher that most precisely corresponds 
// to what you want your code to be doing.