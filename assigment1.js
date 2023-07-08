//Exercise 1: 
function destructureExample(obj,arr){
    const {name,age}=obj;
    const [valu1,valu2]=arr
    return {name,age};
}

const obj = { name: 'John', age: 30, city: 'New York' };

const arr = [10, 20, 30, 40];

console.log(destructureExample(obj,arr))//{ name: 'John', age: 30 }

//Exercise 2:
function sumNumbers (...numbers){
   
    let sum=0;
    for(const number of numbers){
        sum +=number;
    }
    return sum;
}
//test the function
const result =sumNumbers(1, 2, 3, 4, 5);
console.log(result)// output 15

//Exercise 3:
function createGreeting (name){
    return `Hello,${name}! Welcome to our website`
}

console.log(createGreeting('Alice'));//Hello,Alice! Welcome to our website

//Exercise 4:

function isEven (number){
    return number % 2 === 0 ? "Even":"Odd"
}
//test function 
const result = isEven(7);
console.log(result)//Odd

//Exercise 5:


const multiply = (a, b) => a * b;

//Exercise 6:


function getLargestNumber(num1,num2){
    const isNumber1Larger = num1>num2;
    const isNumber2Larger = num1<num2;
    return num1 ?? num2 ?? isNumber1Larger ? num1 : num2;
    
}

const result = getLargestNumber(10,5)
console.log(result)//output 10

//Exercise 7:

function getAddressCity (address){
    const city = address?.city;
    if(city===undefined){
        return 'Unknown'
    }
    return city;
}

const address = { street: '123 Main St', country: 'USA' };

const result = getAddressCity(address)
console.log(result)// "Unknown"

//Exercise 8: 

function doubleNumbers (numbers){
    let doubleNumbers =[]
    doubleNumbers = numbers.map(number => number *2)
    return doubleNumbers
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));//output [ 2, 4, 6, 8, 10 ]

//Exercise 9:

function filterEvenNumbers (numbers){
    return numbers.filter(number=> number%2===0);
}

const numbers = [1,2,3,4,5];
console.log(filterEvenNumbers(numbers))//output [ 2, 4 ]

//Exercise 10: 

function sumArray(numbers) {
  return numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
// Output: 15

//Exercise 11:

function sortNumbers (numbers){
    return numbers.sort((a,b)=>a-b);
}

const numbers =[5, 2, 8, 1, 4]
console.log(sortNumbers(numbers))// Output: [1, 2, 4, 5, 8]