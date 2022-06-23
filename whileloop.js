






// let i = 1;
// while (i<6){
//     console.log(i); i++;
// }

// let i = 20;
// while (i>1) {
//     console.log(i); i--;
// }

// ------------------factorial of number using recursion

function fact(num,facto) {
    if(num>0){
        facto = facto*num;
        return fact(num-1,facto);
    }
    return facto;
}
console.log(fact(5,1));