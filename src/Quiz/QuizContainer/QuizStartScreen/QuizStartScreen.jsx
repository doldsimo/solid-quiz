import { Button } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";
import { useQuizData } from "../../../context/quizState";
import styles from "./QuizStartScreen.module.css";


const QuizStartScreen = () => {
    const { navigateToQuizPage } = useQuizData();
    return (
        <div>
            <Button class={styles.button} rightIcon={<AiFillPlayCircle />} variant="outline" onClick={() => navigateToQuizPage(1)}>
                Start Quiz
            </Button>
        </div>
    )
}

export default QuizStartScreen;