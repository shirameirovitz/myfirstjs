let count_happy_number= 0;
for( let i_number=1;count_happy_number<5; i_number++){
    let number= i_number;
    for(let i=1; i<=100; i++) {
        let sum = 0;
        let temp = String(number).split(''); 
        for(let z=0; z < temp.length; z++){
            sum += temp[z] * temp[z];
        }
        number = sum;  
        if(number==1){
            console.log (i_number);
            count_happy_number++
            break;
        }
    }
}


