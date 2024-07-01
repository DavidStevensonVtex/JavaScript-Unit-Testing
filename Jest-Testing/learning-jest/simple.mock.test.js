const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();