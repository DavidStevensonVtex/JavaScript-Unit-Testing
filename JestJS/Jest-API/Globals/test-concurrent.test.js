// test.concurrent(name, fn, timeout)

// Also under the alias: it.concurrent(name, fn, timeout)

// CAUTION
// test.concurrent is considered experimental - see here for details on missing 
// features and other issues.

// Use test.concurrent if you want the test to run concurrently.

// The first argument is the test name; the second argument is an asynchronous 
// function that contains the expectations to test. The third argument (optional) 
// is timeout (in milliseconds) for specifying how long to wait before aborting. 
// The default timeout is 5 seconds.

test.concurrent('addition of 2 numbers', async () => {
    expect(5 + 3).toBe(8);
  });
  
  test.concurrent('subtraction 2 numbers', async () => {
    expect(5 - 3).toBe(2);
  });
  
//   TIP: Use the maxConcurrency configuration option to prevent Jest from executing 
//   more than the specified amount of tests at the same time.