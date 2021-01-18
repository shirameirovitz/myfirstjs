
let sum =0;
for(let j=1; j<1000; j++) {
    if(j % 3===0 || j% 5===0) {
   sum +=j;
}
}
console.log(sum);