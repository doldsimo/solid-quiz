import { createContext, createSignal, useContext } from "solid-js";

export const QuizContext = createContext();

export function QuizProvider(props) {
    const [progress, setProgress] = createSignal(0);            // Progress in % from the quiz
    const [questionsSum, setQuestionsSum] = createSignal(10);    // sum of all questions from the quiz
    const [quiz, setQuiz] = createSignal({});    // sum of all questions from the quiz
    const [quizStartButton, setQuizStartButton] = createSignal("");    // String of quiz tilte
    const [currentPage, setCurrentPage] = createSignal(0);    // sum of all questions from the quiz  //0 is for showng start page, 0 is the first Question 1, the seconde usw.
    const [currentQuestion, setCurrentQuestion] = createSignal({});    // sum of all questions from the quiz  //-1 is for showng start page, 0 is the first Question 1, the seconde usw.
    const [allowBackjumping, setAllowBackjumping] = createSignal(true);    // set if it is allowed to jump back, true means it is allowed
    const [showProgressBar, setShowProgressBar] = createSignal(false);    // if it is true show progressbar is visible, else progressbar is hidden
    const [showQuizPoints, setShowQuizPoints] = createSignal(false);    // if it is true show max points in every Quiz question
    const [resultType, setResultType] = createSignal("none");    // variable which decide how the result is displayed there are these options: ("none" | "points" | "feedback")
    const [onComplete, setOnComplete] = createSignal(null);    // function which is executed after quiz is completed event can be used with informations about result
    // const [quizStyle, setQuizStyle] = createSignal("true");    // set quizstyle at the moment there are two styles: ("scroll" | "default") 
    const [allUserAnswers, setAllUserAnswers] = createSignal([]);


    // This Method is setting the initial status of the quiz which is given from the imported json file.
    const setInitialQuizInfo = (quiz) => {
        // console.log(quiz);
        setQuiz(quiz);
        setQuestionsSum(quiz.questions.length);
        setAllowBackjumping(quiz.allowBackjumping);
        setCurrentQuestion(quiz.questions[0]);
        setAllUserAnswers(Array.from({ length: quiz.questions.length }, i => i = null));
    }

    const navigateToQuizPage = (pIndex) => {
        setCurrentPage(pIndex);
        setCurrentQuestion(quiz().questions[pIndex - 1]);
    }
   
    return <QuizContext.Provider
        value={{
            progress, setProgress,
            questionsSum, setQuestionsSum,
            allowBackjumping, setAllowBackjumping,
            currentPage, setCurrentPage,
            setInitialQuizInfo, setCurrentQuestion,
            currentQuestion, navigateToQuizPage,
            quiz, setQuiz,
            quizStartButton, setQuizStartButton,
            setAllUserAnswers, allUserAnswers,
            showProgressBar, setShowProgressBar,
            showQuizPoints, setShowQuizPoints,
            resultType, setResultType,
            onComplete, setOnComplete,
        }}>
        {props.children}
    </QuizContext.Provider >
}

// Function for only one line import to import the state, so this function can be used to get access to the global state from the quiz:
export function useQuizData() {
    return useContext(QuizContext);
}