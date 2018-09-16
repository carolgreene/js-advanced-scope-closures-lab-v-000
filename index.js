function produceDrivingRange (range) {
  return function (start, end) {
    let street1 = parseInt(start);
    let street2 = parseInt(end);
    let distance = Math.abs(street1 - street2)

    if (distance <= range) {
      return `within range by ${range - distance}`
    }
    else {
      return `${distance - range} blocks out of range`
    }

  }
}

 function produceTipCalculator (percent) {
   return function (fare) {
     return fare * percent;
   }
 }

function createDriver() {
  let DriverId = 0;
  return  class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
