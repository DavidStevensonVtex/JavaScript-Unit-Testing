// jest.spyOn(object, methodName, accessType?)

// Since Jest 22.1.0+, the jest.spyOn method takes an optional third argument of 
// accessType that can be either 'get' or 'set', which proves to be useful when 
// you want to spy on a getter or a setter, respectively.

const audio = require('../audio');
const video = require('../video2');

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test('plays video', () => {
  const spy = jest.spyOn(video, 'play', 'get'); // we pass 'get'
  const isPlaying = video.play;

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});

test('plays audio', () => {
  const spy = jest.spyOn(audio, 'volume', 'set'); // we pass 'set'
  audio.volume = 100;

  expect(spy).toHaveBeenCalled();
  expect(audio.volume).toBe(100);
});

// √ plays video (3 ms)
// √ plays audio (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total