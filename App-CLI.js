const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let answers = [];

function main() {
    askQuestion();
}

function askQuestion() {
    console.log();

    // Form the equation
    const factor1 = Math.floor(Math.random() * 10) + 1;
    const factor2 = Math.floor(Math.random() * 10) + 1;
    const product = factor1 * factor2;

    // Decide where to put the correct answer
    const solutionIndex = Math.floor(Math.random() * 4);
    const solutionLetter = String.fromCharCode(65 + solutionIndex);
    answers[solutionIndex] = product;

    // For each of the 4 answer choices
    for (let i = 0; i < 4; i++) {
        if (i === solutionIndex) {
            continue;
        }
        answers[i] = generateWrongAnswer(factor1, factor2);
    }

    // Print the equation
    console.log(`${factor1} * ${factor2} =  `);

    // Print answer options
    for (let i = 0; i < answers.length; i++) {
        const answerLetter = String.fromCharCode(65 + i);
        console.log(`  ${answerLetter}) ${answers[i]}`);
    }

    askForInput(factor1, factor2, solutionLetter, product);
}

function generateWrongAnswer(factor1, factor2) {
    let wrongAnswer;
    const generationApproach = Math.random();

    if (generationApproach < 0.667) {  // increment or decrement one of the factors
        do {
            const factorToShift = Math.random() > 0.5 ? factor1 : factor2;
            const shiftAmount = Math.random() > 0.5 ? 1 : -1;

            if (factorToShift === factor1) {
                wrongAnswer = (factorToShift + shiftAmount) * factor2;
            } else {
                wrongAnswer = (factorToShift + shiftAmount) * factor1;
            }
        } while (answers.includes(wrongAnswer));
    } else if (generationApproach < 0.889) { // new equation
        do {
            const newFactor1 = Math.floor(Math.random() * 10) + 1;
            const newFactor2 = Math.floor(Math.random() * 10) + 1;
            wrongAnswer = newFactor1 * newFactor2;
        } while (answers.includes(wrongAnswer));
    } else { // random 1-100
        do {
            wrongAnswer = Math.floor(Math.random() * 100) + 1;
        } while (answers.includes(wrongAnswer));
    }
    return wrongAnswer;
}

function askForInput(factor1, factor2, solutionLetter, product) {
    // Ask for input
    readline.question(`\nEnter the letter of your choice: `, input => {
        // Print response
        if (input.toUpperCase() === solutionLetter) {
            console.log(`${solutionLetter}) ${product} is correct.`);
            askQuestion();
        } else {
            console.log('Wrong. Try again.');
            askForInput(factor1, factor2, solutionLetter, product);
        }
    });
}

main();
