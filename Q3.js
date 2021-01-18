let X=4;
let Y=0;
let Z=-2;

if(X>Y && Y>Z){
    alert("X, Y, Z");
}
else if(X>Z && Z>Y){
    alert("X, Z, Y");
}
else if(Y>Z && Z>X){
    alert("Y, Z, X");
}
else if(Y>X && X>Z){
    alert("Y, X, Z");
}
else if(Z>Y && Y>X){
    alert("Z, Y, X");
}
else if(Z>X && X>Y){
    alert("Z, X, Y");
}
