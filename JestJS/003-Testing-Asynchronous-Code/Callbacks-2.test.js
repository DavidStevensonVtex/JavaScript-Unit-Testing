// Testing Asynchronous Code - Callbacks

// There is an alternate form of test that fixes this. Instead of putting the test in a function 
// with an empty argument, use a single argument called done. Jest will wait until the done 
// callback is called before finishing the test.

function fetchData(callback) {
    setTimeout(() => {
        callback(false, "peanut butter");
    }, 1500);
}

test('the data is peanut butter', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });