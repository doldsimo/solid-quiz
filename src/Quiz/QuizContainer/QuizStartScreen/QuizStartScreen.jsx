import { Button, Center, Heading } from "@hope-ui/solid";
import { AiFillPlayCircle } from "solid-icons/ai";
import { useQuizData } from "../../../context/quizState";
import styles from "./QuizStartScreen.module.css";


const QuizStartScreen = () => {
    const { navigateToQuizPage, quizTitle } = useQuizData();

    
    return (
        <div>
            <Center>
                <div>
                    <Center>
                        {console.log(quizTitle())}
                        <Heading size="lg" level="1">{quizTitle()}</Heading>
                    </Center>
                    <Button class={styles.button} rightIcon={<AiFillPlayCircle />} variant="outline" onClick={() => navigateToQuizPage(1)}>
                        Start Quiz
                    </Button>
                </div>
            </Center>
        </div>
    )
}

export default QuizStartScreen;