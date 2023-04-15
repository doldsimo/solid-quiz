// Functions check if answer is completely correct and returns ture or false for the Questiontype.

export function isSingleChoiceCorrect(userAnswer, correctAnswer) {
    if (userAnswer === null) {
        return false;
    }
    let isCorrect = true;
    if (Number(userAnswer) !== Number(correctAnswer)) {
        isCorrect = false;
    }
    return isCorrect;
}

export function isMultipleChoiceCorrect(userAnswer, correctAnswer) {
    let isCorrect = true;
    for (let i = 0; i < correctAnswer.length; i++) {
        if (correctAnswer[i] !== userAnswer[i]) {
            return false;
        }
    }
    return isCorrect;
}
export function isCorrectOrderCorrect(userAnswer, correctAnswer) {
    let isCorrect = true;
    for (let i = 0; i < correctAnswer.length; i++) {
        if (correctAnswer[i] !== userAnswer[i]) {
            return false;
        }
    }
    return isCorrect;
}

