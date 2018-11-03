


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
