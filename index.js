function produceDrivingRange(blockRange) {
  return function(start, end) {
    let block1 = parseInt(start)
    let block2 = parseInt(end)
    let distance = Math.abs(block2 - block1)

    if (blockRange <= distance) {
      let range = blockRange - distance
      return `within range by ${range)`
    } else {
      let range = distance - blockRange 
      return `${range} blocks out of range`
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
