"use strict"
//                                              Functions

// 1. Write a function called sum that takes in two numbers as parameters and returns their sum.

const sum=(x,y)=>{
    let addition=x+y;
    return(addition);
}
console.log(sum(4,5));

// Write a function called isEven that takes in a number as a parameter and returns true if the number is even and false if it is odd.

const isEven=(number)=>{
    if(number% 2=== 0) {
        console.log("TRUE")
    }
    else{
        console.log("FALSE")
    }
}
isEven(9);
                                    
// Write a function called reverseString that takes in a string as a parameter and returns the string in reverse order. 

const reverseString=(string)=>{
    let reverse="";
    for(let i=string.length-1;i>=0;i--){

         reverse+=string[i];
        
    }
    return reverse;
}
console.log(reverseString("happy"));


// Write a function called calculateFactorial that takes in a number as a parameter and returns the factorial of that number (i.e. the product of all positive integers up to that number).



const calculateFactorial=(num)=>{
    let fact=num;
    for(let i=num-1;i>=1;i--){
        fact=fact*i;
    }
    return(fact);
}
console.log(calculateFactorial(3));


// Write a function called convertTemperature that takes in a temperature in Celsius as a parameter and returns the equivalent temperature in Fahrenheit.




const convertTemperature=(tempInCelsius)=>{
    let fahrenheit=tempInCelsius * (9/5) + 32;
    return(fahrenheit);
}

console.log(convertTemperature(34));


// Write a function called countVowels that takes in a string as a parameterand returns the number of vowels in the string. For example, countVowels("hello") should return 2.


const countVowels=(string)=>{
    let vowels=0;
    for(let i=0;i<string.length;i++){
        
        if(string[i]==="a" || string[i]==="e" || string[i]==="i" || string[i]==="o" || string[i]==="u"  ){
            vowels++;
        }


    }
    return(`The count of vowels which are used in following  ${string} is ${vowels}`)
}
console.log(countVowels("happy"));