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

}

Program().then(() => {
    process.exit(0);
});