// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function (el) {
    console.log(el.name);
  })
}
function logDriversByHometwon(driver, location) {
  driver.forEach(function(el) {
    if(el.location === location){
      console.log(el.name);
    }
  })  
}
function driversByRevenue(driver) {
  const driverCopy = [...driver];
  return driverCopy.sort(function(a,b){
    return a.revenue - b.revenue;
  })
}