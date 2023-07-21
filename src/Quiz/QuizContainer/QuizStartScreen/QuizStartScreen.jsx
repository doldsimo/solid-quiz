import { Button, Center, Heading } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";
import { useQuizData } from "../../../context/quizState";
import styles from "./QuizStartScreen.module.css";


const QuizStartScreen = () => {
    const { navigateToQuizPage, quizTitle } = useQuizData();


    return (
        <div>
            <Center>
                <Button class={styles.button} rightIcon={<AiFillPlayCircle />} variant="outline" onClick={() => navigateToQuizPage(1)}>
                    {quizTitle() === null ? "Start Quiz" : quizTitle()}
                </Button>
            </Center>
        </div>
    )
}

export default QuizStartScreen;