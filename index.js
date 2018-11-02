
function produceDrivingRange(blockRange) {
  return function(start, end) {                //function has 2 arguments. starting & ending blocks
    let street1 = parseInt(start)              //set variable = to start block converted to integer
    let street2 = parseInt(end)                //set variable = to end block converted to integer
    let distance = Math.abs(street2 - street1)     //set distance variable.  use Math.abs so all answers positive

    if(distance <= blockRange) {                 //calculate is distance is less than blockRange argument
      let range = blockRange - distance           //is so, set variable to the difference
      return `within range by ${range}`           //return that it is in range
    } else {
      let range = distance - blockRange           //if not, set range to distance - blockRange
      return `${range} blocks out of range`           //return that it is out of range
    }
  }
}

function produceTipCalculator(percent) {            //argument of percent for tip
  return function(fare) {                            //return function has argument of the fare
    return fare * percent                            //return fare * percent
  }
}

function createDriver() {                         //wrap code in createDriver()
  let DriverId = 0                                 //set DriverId to 0
  return class {                                   //return class w/constructor info below
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
