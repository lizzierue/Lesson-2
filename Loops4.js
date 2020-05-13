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
    
    
     let myItems = ["Apple", "Pear", "Banana", "Andrew"];
     for (let i = 0; i < myItems.length; i++) {
         let currentItem = myItems[i];
         if(currentItem[0].toLowerCase() == "a") {
            console.log(currentItem);
         }
     }
}

Program().then(() => {
    process.exit(0);
});