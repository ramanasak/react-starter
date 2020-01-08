console.log("test ground");

var fullName="ramana babu";

if(fullName){
    console.log(fullName.split(' '));
}

let firstName;
if(fullName){
    firstName=fullName.split(' ')[0];
}
console.log("firstName",firstName);
const firstNameArrow = fullName2=>fullName2.split(' ')[0];
console.log(firstNameArrow('ramana babu'));

const multiplier={
    numbers:[1,2,3],
    multiplyby:3,
    multiply() {
        this.numbers.forEach((number)=>{console.log(number * this.multiplyby);});
    }
};

console.log(multiplier.multiply());