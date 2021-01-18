
let X= -3;
let y=-7;
let z= 3;
if (X===0 || y===0 || z===0){
    alert ("sign 0"); 
}
//namNegative is the count of negative numbers 
else {
let numNegative=0;

  if (X<0){
      numNegative++;
  }
  if (y<0){
      numNegative++;
  }
  if (z<0) {
      numNegative++;
      }
  if (numNegative % 2===0){
      alert ("sign +");
  }
else {
    alert ("sign -");
}
}