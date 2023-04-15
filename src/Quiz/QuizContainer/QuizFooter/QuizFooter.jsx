import { Show } from "solid-js";
import { useQuizData } from "../../../context/quizState";
import QuizNavigationButton from "./QuizNavigationButton/QuizNavigationButton";


const QuizFooter = () => {
    const { questionsSum, allowBackjumping, currentPage, navigateToQuizPage } = useQuizData();

    const navigateToNextPage = () => {
        navigateToQuizPage(currentPage() + 1);
    }

    return (
        <div style={{ "display": "flex", "justify-content": "space-between" }}>
            <Show
                when={currentPage() > 1 && allowBackjumping()}
                fallback={<div />}
            >
                <QuizNavigationButton onClick={() => navigateToQuizPage(currentPage() - 1)}>Back</QuizNavigationButton>
            </Show>
            <Show
                when={currentPage() === questionsSum()}
                fallback={<QuizNavigationButton onClick={() => navigateToNextPage()}>Next</QuizNavigationButton>}
            >
                <QuizNavigationButton color="$success11" onClick={() => navigateToQuizPage(currentPage() + 1)}>Finish</QuizNavigationButton>
            </Show>
        </div>
    )
}

export default QuizFooter;