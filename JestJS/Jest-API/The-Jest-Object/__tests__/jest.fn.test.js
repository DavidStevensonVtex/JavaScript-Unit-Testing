// Mock Functions

// jest.fn(implementation?)

// Returns a new, unused mock function. Optionally takes a mock implementation.

test('test.fn() test', () => {

    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
    
    // With a mock implementation:
    const returnsTrue = jest.fn(() => true);
    expect(returnsTrue()).toBe(true);
});

// PASS  __tests__/jest.fn.test.js
// √ test.fn() test (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total