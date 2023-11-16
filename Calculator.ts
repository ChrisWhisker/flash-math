class Calculator {
    choices: number[];

    constructor() {
        this.choices = [];
    }

    private randomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    public makeFactor = (): number => {
        return this.randomInt(3, 9);
    };

    public makeChoices = (f1: number, f2: number): number[] => {
        console.log(`Making choices. Equation is ${f1} x ${f2}`);
        this.choices = [f1 * f2];

        for (let i = 0; i < 3; i++) {
            this.choices.push(this.generateWrongAnswer(f1, f2));
        }
        // console.log(`New choices are ${this.choices}`);
        return this.choices;
    };

    private generateWrongAnswer = (f1: number, f2: number) => {
        let wrongAnswer: number;
        const generationApproach = Math.random();

        if (generationApproach < 0.667) {
            wrongAnswer = this.shiftFactor(f1, f2);
        } else if (generationApproach < 0.889) {
            wrongAnswer = this.makeNewProduct();
        } else {
            wrongAnswer = this.makeRandomNumber();
        }
        return wrongAnswer;
    };

    private shiftFactor = (f1: number, f2: number): number => {
        let wrongAnswer, newEquation;
        do {
            const factorToShift = Math.random() > 0.5 ? f1 : f2;
            const shiftAmount = Math.random() > 0.5 ? 1 : -1;

            if (factorToShift === f1) {
                wrongAnswer = (factorToShift + shiftAmount) * f2;
                newEquation = `(${(factorToShift + shiftAmount)} x ${f2})`;
            } else {
                wrongAnswer = f1 * (factorToShift + shiftAmount);
                newEquation = `(${f1} x ${(factorToShift + shiftAmount)})`;
            }
        } while (this.choices.includes(wrongAnswer));
        console.log(`Choice ${wrongAnswer} generated using Shifted Factor approach ${newEquation}`);
        return wrongAnswer;
    };

    private makeNewProduct = (): number => {
        const newFactor1 = this.makeFactor();
        let wrongAnswer, newFactor2;
        do {
            newFactor2 = this.makeFactor();
            wrongAnswer = newFactor1 * newFactor2;
        } while (this.choices.includes(wrongAnswer));
        console.log(`Choice ${wrongAnswer} generated using New Equation approach (${newFactor1} x ${newFactor2})`);
        return wrongAnswer;
    };

    private makeRandomNumber = (): number => {
        let wrongAnswer;
        do {
            wrongAnswer = this.randomInt(1, 100);
        } while (this.choices.includes(wrongAnswer));
        console.log(`Choice ${wrongAnswer} generated using Random Number approach`);
        return wrongAnswer;
    };
}

export default Calculator;
