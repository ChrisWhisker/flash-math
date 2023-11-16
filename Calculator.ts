class Calculator {

    public makeFactor = (): number => {
        return Math.floor(Math.random() * 7) + 3; // number between 3 and 9
    };

    public makeChoices = (f1: number, f2: number): number[] => {
        console.log(`Making choices. Equation is ${f1} x ${f2}`);
        let newChoices = [f1 * f2];
    
        for (let i = 0; i < 3; i++) {
            newChoices.push(this.generateWrongAnswer(f1, f2, newChoices));
        }
        // console.log(`New choices are ${newChoices}`);
        return newChoices;
    };
    
    private generateWrongAnswer = (f1: number, f2: number, choiceList: number[]) => {
        let wrongAnswer: number, approachName: string, details = "";
        const generationApproach = Math.random();
    
        if (generationApproach < 0.667) {
            // increment or decrement one of the factors
            approachName = "Shifted Factor";
            do {
                const factorToShift = Math.random() > 0.5 ? f1 : f2;
                const shiftAmount = Math.random() > 0.5 ? 1 : -1;
    
                if (factorToShift === f1) {
                    wrongAnswer = (factorToShift + shiftAmount) * f2;
                    details = `(${(factorToShift + shiftAmount)} x ${f2})`;
                } else {
                    wrongAnswer = f1 * (factorToShift + shiftAmount);
                    details = `(${f1} x ${(factorToShift + shiftAmount)})`;
                }
            } while (choiceList.includes(wrongAnswer));
        } else if (generationApproach < 0.889) {
            // new equation
            approachName = "New Equation";
            const newFactor1 = Math.floor(Math.random() * 10) + 1;
            do {
                const newFactor2 = Math.floor(Math.random() * 10) + 1;
                wrongAnswer = newFactor1 * newFactor2;
                details = `(${newFactor1} x ${newFactor2})`;
            } while (choiceList.includes(wrongAnswer));
        } else {
            // random 1-100
            approachName = "Random Number 1-100";
            do {
                wrongAnswer = Math.floor(Math.random() * 100) + 1;
            } while (choiceList.includes(wrongAnswer));
        }
        console.log(
            `Choice ${wrongAnswer} generated using approach: ${approachName} ${details}`
        );
        return wrongAnswer;
    };
}

export default Calculator;
