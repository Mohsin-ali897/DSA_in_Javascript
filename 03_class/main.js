//! ============ Loops in javascript ==================

// 1 - 22 

// for(let i = 1; i<= 10;i++){
//     console.log(i)
// }


//? if we want to print 11 in our code so we can do this method to print  j = 11 
// let j = 1
// for(;j<= 10;j++){
//     console.log(j)
// }
// console.log(j)

// //? it is valid but run infinite 
// for(;;){
//     console.log('hello')
// }

//? it is also valid and run infinite

// for(let i = 0; i<= 11;){
//     console.log(i)
// }

//* challenge question 1 
//* print some of n natural number 

// let sum = 0
// let startingNum = 10
// let EndingNum = 20
// for(; startingNum <= EndingNum; startingNum++){
//     console.log(startingNum)
//     sum += startingNum
// }  
// console.log(sum)

//? it is a optimize and safe programme 
// let value = 5
// if(isNaN(value)){
//     console.log(`${value} is not a number Please provide a perfect number`)
// }else{
//     if(value > 0){
//         let sum = 0
//         let i = 1
//         let fact = 1
//         for (; i<= value; i++){
//             sum += i
//             fact = fact * i
//         }
//         console.log(`Sum of n Number ${value} is ${sum}`)
//         console.log(`Factorial of n Number ${value} is ${fact}`)
//     }else{
//         console.log(`${value} should be positive and more than zero`)
//     }
// }

// let value = 5;
// let isNumber = value === +value;

// if (!isNumber) {
//   console.log(`${value} is not a number. Please provide a valid number.`);
// } else if (value > 0) {
//   let sum = 0, fact = 1, i = 1;
//   while (i <= value) {
//     sum += i;
//     fact *= i;
//     i++;
//   }
//   console.log(`Sum of ${value} is ${sum}`);
//   console.log(`Factorial of ${value} is ${fact}`);
// } else {
//   console.log(`${value} should be a positive number greater than zero.`);
// }

// let pr = 46

// if(isNaN(pr)){
//     console.log(`${pr} is not a number Please provide a perfect number`)
// }else if(pr >0){
   
//         let sum = 0 ; fact = 1; dividend = []
//         for (let i = 1; i<= pr; i++){
//             sum += i
//             fact = fact * i
//             if(pr%i == 0){
//                 dividend.push(i)
//             }
//             }
//         console.log(`Sum of n Number ${pr} is ${sum}`)
//         console.log(`Factorial of n Number ${pr} is ${fact}`)
//         console.log(`dividend of n Number ${pr} is ${dividend}`)
//         for (let i in dividend){
//             console.log(`number ${dividend[i]} is perfect dividend of ${pr}`)
//         }
    
// }

//! in this case loop only run half time of a given value because we know that after the half of a value only it n number within itself devide it completely 
// let a = 12
// for (let i  = 1; i<=Math.floor(a/2);i++){
//     console.log(i)
// }
// console.log(a)


// //* checking prime number
// let priNum = 23
// if(isNaN(priNum)){
//     console.log('Please give a valid number')
// }else if (priNum > 0){
//     let PrimeCheck = true
//     for(let i = 2; i<=Math.floor(priNum/2); i++){
//         if(priNum%i ===0 ){
//             PrimeCheck = false;
//             break
//         }
//     }
//     console.log(PrimeCheck)
// }

// function IsPrime(n){
//     if(n <= 1) return false;
//     if(n == 2) return true;
//     if(n%2 == 0) return false
//     for (let i = 3; i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%1== 0)return false
//     }
//     return true
// }
// console.log('number is '+IsPrime(37))


//! programme to check number is strong or not 
// let StrOrNotNum = Number(prompt('enter the number: '))
// if(isNaN(StrOrNotNum)){
//     console.log('Please give a valid number')
// }else if (StrOrNotNum > 0){
//     var copy = StrOrNotNum
//     let sum = 0
//     while(copy > 0){
//             let fact = 1
//         let rem = copy%10
//         for (let i = 1; i <= rem; i++) {
//             fact *= i; // Calculate factorial of the digit
            
//         }
//         sum =sum + fact; // Add factorial to sum
//         copy = Math.floor(copy/10)
//     }
//     console.log(sum)
//     if(StrOrNotNum === sum){
//         console.log('Number is Strong')
//     }else{
//         console.log('Number is not strong')
//     }
// }else{
//     console.log('Please provide a postive integir')
// }


//! do while loop
// let userPrompt = prompt('Enter the text (exit for close)').toLowerCase()
// do{
//     console.log('hello')
//     userPrompt = prompt('Enter the text (exit for close)').toLowerCase()
// }while(userPrompt != 'exit')


let random = Math.floor(Math.random()*100)
let guess = -1
while(guess !== random){
    guess = Number(prompt('Enter the number: '))
    if(isNaN(guess) || guess<1 || guess > 100){
        console.log('Choose number is between 1-100')
    }else if(guess > random){
        console.log('Number is too Low')
    }else if(guess < random){
        console.log('Number is too High')
    }else{
        console.log('Congratulation Number is Match')
    }
}




