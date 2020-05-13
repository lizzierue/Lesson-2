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
    let myArray = [];
    for (let i = 0; i < 5; i++) {
        let userInput = await askQuestion("Enter Your Item: ");
        myArray.push(userInput);
    }
    console.log(myArray);
    let myArray = [];

    // while (true) {
    //     let userInput = await askQuestion("Enter Your Item: ");
    //     if(userInput == "") {
    //         break;
    //     }
    //     myArray.push(userInput);
    // }
    // console.log(myArray);
}

Program().then(() => {
    process.exit(0);
});
