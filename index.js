// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  
  if (blockNumber > 42) {
    
    return blockNumber - 42
  
  } else {
    
    return 42 - blockNumber
  }
  
}
function distanceFromHqInfeet(blockNumber) {
  
  return distanceFromHqInBlocks(blockNumber) * 264;

}
function distanceTravelledInFeet(startigBlock, endingBlock) {
  
  if (startingBlock > endingBlock) {
    
    return (startingBlock - endingBlock) * 264;
  
  } else {
    
    return (endingBlock - startigBlock) * 264;
  } 

}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInfeet(start, destination);

  if (distance <= 400) {
    return 0; 
  } 
}


  


