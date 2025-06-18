
//! challenge question 

//* 0 - 100 unit price is 4 
//* 101 - 200 unit price is 6 
//* 201 - 400 unit price is 10 
//* 401 - 700 unit price is 12 
//* 701 - nth unit price is 15 


let totalUnit = 760
let unitsInThisSlab = 0
let amount = 0

if (totalUnit > 700){
    unitsInThisSlab = totalUnit - 700;
    amount += unitsInThisSlab * 15;
    totalUnit = 700;
}if(totalUnit > 400){
    unitsInThisSlab = totalUnit - 400
    amount += unitsInThisSlab * 12
    totalUnit = 400
}if(totalUnit > 200){
    unitsInThisSlab = totalUnit - 200
    amount += unitsInThisSlab * 10
    totalUnit = 200
}if(totalUnit > 100 ){
    unitsInThisSlab = totalUnit - 100
    amount += unitsInThisSlab * 6
    totalUnit = 100
}if (totalUnit > 0) {
    unitsInThisSlab = totalUnit - 0
    amount += unitsInThisSlab * 4
    totalUnit = 0
}
console.log('__'*20)
console.log(`You,r Total Payable Amount of Electricity is ${(amount)}`)


// //* =============== Sheriyans Given Solution ============================ 
let totalConsumedUnit  = 760
let payable_amount = 0
if (totalConsumedUnit > 700){
    payable_amount += (totalConsumedUnit - 700) * 15 // 900
    totalConsumedUnit = 700
}if (totalConsumedUnit > 400){
    payable_amount += (totalConsumedUnit - 400) * 12
    totalConsumedUnit = 400
}if (totalConsumedUnit > 200){
    payable_amount += (totalConsumedUnit - 200) * 10
    totalConsumedUnit = 200
}if (totalConsumedUnit > 100){
    payable_amount += (totalConsumedUnit - 100) * 6
    totalConsumedUnit = 100
}if (totalConsumedUnit > 0){
    payable_amount += (totalConsumedUnit - 0) * 4
    totalConsumedUnit = 0
}
console.log(`You,r Total Payable Amount of Electricity is ${(payable_amount)}. According to Sheriyan coding school`)

// 700 - 760 = 60 === 60 X 15      ===>  900
// 700 - 400 = 300 === 300 X 12    ===>  3600
// 400 - 200 = 200 === 200 X 10    ===>  2000
// 200 - 100 = 100 === 100 X 6     ===>  600  
// 100 - 0 = 100 === 100 X 4       ===>  400


//! Rupess demoniation
//! Find out how many currency notes in a given amount from ascending to descinding order like 5000 -> 1000 -> 500 -> 100 -> 50 -> 20 -> 10

//? 1000 -> 500 -> 100 -> 50 -> 20 -> 10 

//? solution 1 
//? it is my own solution logic 
let totalAmount = 54838
let notesSummary = {
    totalTFivehousandNotes:0,
    totalOneThousandNotes:0,
    totalfiveHundredNotes:0,
    totalfiveHundredNotes:0,
    totalHundredNotes:0,
    totalfifthRupessNotes:0,
    totalTwentyRupessNotes:0,
    totalTenRupessNotes:0,
    totalfiveRupessPanis:0,
    totalTwoRupessPanis:0,
    totalOneRupessPanis:0,

}
if(totalAmount >= 5000){
    let totalTFivehousandNotes = totalAmount/5000
    notesSummary.totalTFivehousandNotes = parseInt(totalTFivehousandNotes)
    console.log('total Fivethousand notes is: ' +parseInt(totalTFivehousandNotes))  
    let remainAmount = totalAmount%5000
    console.log('remain amount is: '+totalAmount%5000) 
    totalAmount = remainAmount
    console.log('_______________________________________________')
}
if(totalAmount >= 1000){
    let totalThousandNotes = totalAmount/1000
    notesSummary.totalOneThousandNotes = parseInt(totalThousandNotes)
    console.log('total thousand notes is: ' +parseInt(totalThousandNotes))  
    let remainAmount = totalAmount%1000
    console.log('remain amount is: '+totalAmount%1000) 
    totalAmount = remainAmount
    console.log('_______________________________________________')
}
if(totalAmount >= 500){
    let totalfiveHundredNotes = totalAmount/500
    notesSummary.totalfiveHundredNotes = parseInt(totalfiveHundredNotes)
    console.log('total Five Hundred Rupees notes is: ' +parseInt(totalfiveHundredNotes))  
    let remainAmount = totalAmount%500
    console.log('remain amount is: '+totalAmount%500) 
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
if(totalAmount >= 100){
    let totalHundredNotes = totalAmount / 100
    notesSummary.totalHundredNotes = parseInt(totalHundredNotes)    
    console.log('total One Hundred notes is: ' +parseInt(totalHundredNotes))  
    let remainAmount = totalAmount%100
    console.log('remain amount is: '+totalAmount%100)
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
if(totalAmount >= 50){
    let totalfifthRupessNotes = totalAmount / 50
    notesSummary.totalfifthRupessNotes = parseInt(totalfifthRupessNotes)
    console.log('total Fifty Rupess Notes is: ' + parseInt(totalfifthRupessNotes))  
    let remainAmount = totalAmount%50
    console.log('remain amount is: '+totalAmount%50)
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
if(totalAmount >= 20){
    let totalTwentyRupessNotes = totalAmount / 20
    notesSummary.totalTwentyRupessNotes = parseInt(totalTwentyRupessNotes)
    console.log('total Twenty Rupees notes is: ' + parseInt(totalTwentyRupessNotes))  
    let remainAmount = totalAmount%20
    console.log('remain amount is: '+totalAmount%20)
    totalAmount = remainAmount
    console.log('\n_______________________________________________\n')

}
if(totalAmount >= 10){
    let totalTenRupessNotes = totalAmount / 10
    notesSummary.totalTenRupessNotes = parseInt( totalTenRupessNotes)
    console.log('total Ten Rupees notes is: ' + parseInt(totalTenRupessNotes))  
    let remainAmount = totalAmount%10
    console.log('remain amount is: '+totalAmount%10)
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
if(totalAmount >= 5){
    let totalfiveRupessPanis = totalAmount / 5
    notesSummary.totalfiveRupessPanis = parseInt(totalfiveRupessPanis)
    console.log('total Five Rupess Panis is: ' + parseInt(totalfiveRupessPanis))  
    let remainAmount = totalAmount%5
    console.log('remain amount is: '+totalAmount%5)
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
if(totalAmount >= 2){
    let totalTwoRupessPanis = totalAmount / 2
    notesSummary.totalTwoRupessPanis = parseInt(totalTwoRupessPanis)
    console.log('total Two Rupess Panis is: ' + parseInt(totalTwoRupessPanis))  
    let remainAmount = totalAmount%2
    console.log('remain amount is: '+totalAmount%2)
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
if(totalAmount >= 1){
    let totalOneRupessPanis = totalAmount / 1
    notesSummary.totalOneRupessPanis = parseInt(totalOneRupessPanis)
    console.log('total thousand notes is: ' + parseInt(totalOneRupessPanis))  
    let remainAmount = totalAmount%1
    console.log('remain amount is: '+totalAmount%1)
    totalAmount = remainAmount
    console.log('_______________________________________________')

}
console.log('\ntotal Remaining Amount\n'+ totalAmount)

for (let i in notesSummary){
    if (notesSummary[i]> 0){
        console.log(`Total ${i} in ${notesSummary[i]}`)
    }
}

//* we should also write this 
//? solution 2 
let number = 5500
if(number >= 5000){
    console.log(Math.floor(number/5000))
    number = number%5000
} //? and also write this same logic for more currency notes from top to buttom
console.log(number)  

//? it is AI generated Solution besically it made it a function for note denomination

function calculateNotes(amount) {
    // Validate input
    if (!Number.isInteger(amount) || amount < 0) {
        return "Invalid input: Amount must be a non-negative integer.";
    }

    // Define denominations in descending order
    const denominations = [
        { value: 5000, name: "5000 Rupees" },
        { value: 1000, name: "1000 Rupees" },
        { value: 500, name: "500 Rupees" },
        { value: 100, name: "100 Rupees" },
        { value: 50, name: "50 Rupees" },
        { value: 20, name: "20 Rupees" },
        { value: 10, name: "10 Rupees" },
        { value: 5, name: "5 Rupees" },
        { value: 2, name: "2 Rupees" },
        { value: 1, name: "1 Rupee" }
    ];

    // Initialize result object
    const notesSummary = {};
    let remainingAmount = amount;

    // Calculate notes for each denomination
    for (let denom of denominations) {
        if (remainingAmount >= denom.value) {
            const noteCount = Math.floor(remainingAmount / denom.value);
            notesSummary[denom.name] = noteCount;
            remainingAmount = remainingAmount % denom.value;
        }
    }

    // Print results
    console.log(`Amount: ${amount}`);
    for (let denom in notesSummary) {
        if (notesSummary[denom] > 0) {
            console.log(`${denom}: ${notesSummary[denom]}`);
        }
    }
    console.log(`Remaining Amount: ${remainingAmount}`);

    return notesSummary;
}

// Test the function
calculateNotes(50148);

//! Switch Statement 
//?  A switch statement in JavaScript evaluates an expression and executes code blocks based on matching cases. Here's the syntax and key points:
//* Expression: Evaluated once and compared with each case value using strict equality (===).
//* Case: Defines a value to match against the expression. If matched, the code block runs until a break or the end of the switch.
//* Break: Exits the switch block. Without break, execution "falls through" to the next case.
//* Default: Optional; runs if no case matches (like an else).
//* Fall-through: If break is omitted, execution continues to the next case regardless of match.

let cond = 6
switch(cond){
    case 1:
        console.log('Today is monday')
        break
    case 2:
        console.log('Today is tuesday')
        break
    case 3:  //? we can use it for multiple condition check 
    case 4: 
        console.log('Today is Wednesday')
        break
    

}
//? it is a way to use condition in switch statement 
switch(true){
    case 12 > 13:
        console.log('case 1 is true')
    case 13 > 12:
        console.log('Case 2 is true')
}

let a =Number( (0.1 + 0.2).toFixed(1))
//! why we need math.toFIxed method bcz some value given a infinate value and it,s cauee runtime error 
switch (a) {
    case 0.3:
        console.log('hey')
        break;
    case 0.5:
        console.log('hello')
        break;
    default:
        console.log('Good Bye')
        break;
}

