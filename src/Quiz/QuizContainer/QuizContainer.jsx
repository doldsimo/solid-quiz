
import { Match, Switch } from "solid-js";
import { useQuizData } from "../../context/quizState";
import QuizStartScreen from "./QuizStartScreen/QuizStartScreen";
import QuizContent from "./QuizContent/QuizContent";
import QuizResults from "./QuizResults/QuizResults";

const QuizContainer = (props) => {
    const { currentPage, questionsSum, setInitialQuizInfo, setAllowBackjumping, setShowProgressBar, setShowQuizPoints, setResultType, setOnComplete, setQuizTitle } = useQuizData();

    // Setting props for component which are passed from library user
    setInitialQuizInfo(props.quiz);
    setQuizTitle(props.quizTitle);
    setAllowBackjumping(props.allowBackJump);
    setShowProgressBar(props.showProgressBar);
    setShowQuizPoints(props.showQuizPoints);
    setResultType(props.resultType);
    setOnComplete({ function: props.onComplete }); //because prop is a function it must be wrapped inside an object


    return (
        <Switch>
            {/* Before Quiz is starting */}
            <Match when={currentPage() === 0}>
                <QuizStartScreen />
            </Match>
            {/* When Error of quiz process is happening (higher than 100, or lower than 0) */}
            {/* <Match when={currentPage() < -2 || progress() >= questionsSum}>
                    <Alert status="warning">
                    <FiAlertTriangle />
                    Seems like something is not working correct
                    </Alert>
                </Match> */}
            {/* Normal Quiz is starting */}
            <Match when={questionsSum() + 1 === currentPage()}>
                <QuizResults />
            </Match>

            <Match when={currentPage() > -1}>
                <QuizContent />
            </Match>
        </Switch>
    )
}

export default QuizContainer