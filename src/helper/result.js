export default function getUserResultPoints(userAnswers, quiz) {
    // console.log(userAnswers);
    // console.log(quiz);
    let result = { resultSum: 0, maxSum: 0 };  // resultSum =Sum of all the points which the user accessed || maxSum = sum of all points which are possible accessable by a user
    for (let i = 0; i < quiz.questions.length; i++) {
        let tep_result = { temp_resultSum: 0, temp_maxSum: 0 };
        switch (quiz.questions[i].questionType) {
            case "singlechoice":
                tep_result = checkSingleChoiceQuestion(userAnswers[i], quiz.questions[i].correctAnswer, quiz.questions[i].point);
                break;
            case "multiplechoice":
                tep_result = checkMultipleChoiceQuestion(userAnswers[i], quiz.questions[i].correctAnswer, quiz.questions[i].point);
                break;
            case "correctorder":
                tep_result = checkCorrectOrderQestion(userAnswers[i], quiz.questions[i].correctAnswer, quiz.questions[i].point);
                break;
            default:
                break;
        }

        result.resultSum = result.resultSum + tep_result.temp_resultSum;
        result.maxSum = result.maxSum + tep_result.temp_maxSum;
    }
    // Returns Object with points from the user and all possible points inside the quiz
    return result;
}

// calculate checkSingleChoiceQuestion points
const checkSingleChoiceQuestion = (userAnswer, quizAnswer, pointsForQuestion) => {
    let result = { temp_resultSum: 0, temp_maxSum: 0 };
    let numberUserAnswer = userAnswer === null ? -1 : Number(userAnswer);
    let numberQuizAnswer = Number(quizAnswer);
    let numberPointsForQuestion = Number(pointsForQuestion);

    if (numberUserAnswer === numberQuizAnswer) {
        result.temp_resultSum = result.temp_resultSum + numberPointsForQuestion;
    }
    result.temp_maxSum = numberPointsForQuestion;

    return result;
}

// calculate checkMultipleChoiceQuestion points
const checkMultipleChoiceQuestion = (userAnswer, quizAnswer, pointsForQuestion) => {
    let result = { temp_resultSum: 0, temp_maxSum: 0 };
    let numberPointsForQuestion = Number(pointsForQuestion);

    for (let i = 0; i < userAnswer.length; i++) {
        if (userAnswer[i] === quizAnswer[i]) {
            result.temp_resultSum = result.temp_resultSum + numberPointsForQuestion;
        }
        result.temp_maxSum = result.temp_maxSum + numberPointsForQuestion;
    }
    return result;
}

// calculate CorrectOrderQestion points
const checkCorrectOrderQestion = (userAnswer, quizAnswer, pointsForQuestion) => {
    let result = { temp_resultSum: 0, temp_maxSum: 0 };
    let numberPointsForQuestion = Number(pointsForQuestion);

    for (let i = 0; i < quizAnswer.length; i++) {
        if (userAnswer[i] === quizAnswer[i]) {
            result.temp_resultSum = result.temp_resultSum + numberPointsForQuestion;
        }
        result.temp_maxSum = result.temp_maxSum + numberPointsForQuestion;
    }
    return result;
}