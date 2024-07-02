// Callbacks

// If you don't use promises, you can use callbacks. For example, let's say that fetchData, instead of 
// returning a promise, expects a callback, i.e. fetches some data and calls callback(null, data) when 
// it is complete. You want to test that this returned data is the string 'peanut butter'.

// By default, Jest tests complete once they reach the end of their execution. That means this test 
// will not work as intended:

// Don't do this!
function fetchData(callback) {
    setTimeout(() => {
        callback(false, "incorrect result");
    }, 1500);
}

test('the data is peanut butter', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

// The problem is that the test will complete as soon as fetchData completes, before ever calling 
// the callback.