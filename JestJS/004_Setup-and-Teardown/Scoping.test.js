// Scoping

// The top level before* and after* hooks apply to every test in a file. The hooks declared 
// inside a describe block apply only to the tests within that describe block.

// For example, let's say we had not just a city database, but also a food database. 
// We could do different setup for different tests:

// Applies to all tests in this file

let cityDatabase = [] ;
let foodDatabase = [] ;

function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( [ "Vienna", "San Juan" ]);
        }, 300);
    });

    return myPromise ;
}

function fetchFoodData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( [ 
                { city: "Vienna", food: "Wiener Schnitzel" }, 
                { city: "San Juan", food: "Mofongo" } 
            ]);
        }, 300);
    });

    return myPromise ;
}

function initializeCityDatabase(){ 
    return fetchData().then ( data => {
        cityDatabase = data ;
    })
}

function initializeFoodDatabase(){ 
    return fetchFoodData().then ( data => {
        foodDatabase = data ;
    })
}

function clearCityDatabase() {
    return fetchData().then ( data => {
        cityDatabase = [];
    })
}

function clearFoodDatabase() {
    return fetchData().then ( data => {
        foodDatabase = [];
    })
}

function isCity(city) {
    return cityDatabase.includes(city);
}

function isValidCityFoodPair(city, food) {
    foodPair = foodDatabase.find(pair => pair.city === city);
    if (foodPair) {
        return foodPair.food === food;
    } else {
        return false ;
    }
}

beforeEach(() => {
  return initializeCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});