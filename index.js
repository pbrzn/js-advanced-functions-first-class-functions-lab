const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
  return (function(fare) {
    return fare * num
  })
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, callbackFn) {
  return callbackFn(arrayOfDrivers);
}
