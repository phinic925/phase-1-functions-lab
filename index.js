// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location>42)
        return location-42
    
    else (location<42)
        return 42-location

}

function distanceFromHqInFeet(feet){
    if (feet>42)
    return ((feet-42) * 264)
    else (feet<42)
    return ((42-feet)* 264)

}
function distanceTravelledInFeet(start, destination){
    if (start>destination)
    return ((start-destination)*264)
    else (start<destination)
    return ((destination-start)*264)

}
function calculatesFarePrice(start1,destination1){
    let  blockDistance= Math.abs(start1-destination1);
    let distanceTravel = blockDistance *264;
    if (distanceTravel<400){
        console.log("give customers a free sample");
        return 0;
    }
    else if (distanceTravel>= 2500){
    return "cannot travel that far"
    }
    else if (2000<distanceTravel && distanceTravel < 2500){
  return 25
    }

  else if(400 <distanceTravel && distanceTravel <2000){
      let rideCost = (0.02*(distanceTravel -400))
      return rideCost

  }
    }
    

