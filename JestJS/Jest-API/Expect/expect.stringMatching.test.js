// expect.stringMatching(string | regexp)

// expect.stringMatching(string | regexp) matches the received value if it is a 
// string that matches the expected string or regular expression.

// You can use it instead of a literal value:

// • in toEqual or toHaveBeenCalledWith
// • to match an element in arrayContaining
// • to match a property in objectContaining or toMatchObject


// This example also shows how you can nest multiple asymmetric matchers, with 
// expect.stringMatching inside the expect.arrayContaining.

describe('stringMatching in arrayContaining', () => {
    const expected = [
      expect.stringMatching(/^Alic/),
      expect.stringMatching(/^[BR]ob/),
    ];
    it('matches even if received contains additional elements', () => {
      expect(['Alicia', 'Roberto', 'Evelina']).toEqual(
        expect.arrayContaining(expected),
      );
    });
    it('does not match if received does not contain expected elements', () => {
      expect(['Roberto', 'Evelina']).not.toEqual(
        expect.arrayContaining(expected),
      );
    });
  });

  
//  PASS  ./expect.stringMatching.test.js
//  stringMatching in arrayContaining
//    √ matches even if received contains additional elements (2 ms)
//    √ does not match if received does not contain expected elements

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total