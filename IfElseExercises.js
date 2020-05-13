const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // 1. Write a console app that takes 2 numbers entered by the user and prints the larger number to the console
    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number: ");
    // let number2 = parseInt(userInput2);
    // if (number1 > number2) {
    //     console.log(number1);
    // } else {
    //     console.log(number2);
    // }

    // // 2
    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number: ");
    // let number2 = parseInt(userInput2);
    // if (number1 > number2) {
    //     console.log(number1);
    //     console.log(number2);
    // } else {
    //     console.log(number2);
    //     console.log(number1);
    // }
    // 3
    let userInput1 = await askQuestion("Enter the first number: ");
    let number1 = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let number2 = parseInt(userInput2);
    if (number1 < number2) {
        console.log(number1);
        console.log(number2);
    } else {
        console.log(number2);
        console.log(number1);
    }

    // let myArray = [];
    // let shouldLoop = true;
    // while (shouldLoop) {
    //     let userInput = await askQuestion("Enter an item for the array");
    //     for (let i = 0; i < myArray.length; i++) {
    //         if (myArray[i] == userInput) {
    //             shouldLoop = false;
    //             break;
    //         }
    //     }
    //     if (shouldLoop) {
    //         myArray.push(userInput);
    //     } else {
    //         break;
    //     }
    // }
    // console.log(myArray);


    // // Loops 4
    // let myItems = ["Apple", "Pear", "Banana", "Andrew"];
    // for (let i = 0; i < myItems.length; i++) {
    //     let currentItem = myItems[i];
    //     if(currentItem[0].toLowerCase() == "a") {
    //         console.log(currentItem);
    //     }
    // }
}

Program().then(() => {
    process.exit(0);
});