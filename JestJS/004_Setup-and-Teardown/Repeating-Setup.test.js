// Setup and Teardown

// Often while writing tests you have some setup work that needs to happen before tests run, and you 
// have some finishing work that needs to happen after tests run. Jest provides helper functions to 
// handle this.

// Repeating Setup

// If you have some work you need to do repeatedly for many tests, you can use beforeEach and 
// afterEach hooks.

// For example, let's say that several tests interact with a database of cities. You have a method 
// initializeCityDatabase() that must be called before each of these tests, and a method 
// clearCityDatabase() that must be called after each of these tests. You can do this with:

let cityDatabase = [] ;

function initializeCityDatabase(){ 
    cityDatabase.push("Vienna");
    cityDatabase.push("San Juan");
}

function clearCityDatabase() {
    cityDatabase = [] ;
}

function isCity(city) {
    return cityDatabase.includes(city);
}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});