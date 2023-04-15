
import { Match, Switch } from "solid-js";
import { useQuizData } from "../../context/quizState";
import QuizStartScreen from "./QuizStartScreen/QuizStartScreen";
import QuizContent from "./QuizContent/QuizContent";
import QuizResults from "./QuizResults/QuizResults";

const QuizContainer = (props) => {
    const { currentPage, questionsSum, setInitialQuizInfo } = useQuizData();


    setInitialQuizInfo(props.quiz);

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