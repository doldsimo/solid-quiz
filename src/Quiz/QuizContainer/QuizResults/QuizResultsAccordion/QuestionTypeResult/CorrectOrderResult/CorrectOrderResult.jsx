
import { Box, Text } from "@hope-ui/solid";
import { useQuizData } from "../../../../../../context/quizState";
import styles from "./CorrectOrderResult.module.css";
import { Index } from "solid-js";

const CorrectOrder = (props) => {
    const { allUserAnswers } = useQuizData();

    return (
        <div>
            <Index each={props.question.correctAnswer}>
                {(answer, i) => (
                    <div class={styles.answerContainer}>
                        <Text>
                            {i + 1 + ": "}
                        </Text>
                        <Box class={props.question.correctAnswer[i] === allUserAnswers()[props.qIndex][i] ? styles.correctAnswer : styles.wrongAnswer}>
                            <Text>{answer()}</Text>
                            {props.question.correctAnswer[i] !== allUserAnswers()[props.qIndex][i] && <Text> &nbsp; | Your answer: {allUserAnswers()[props.qIndex][i]}</Text>}
                        </Box>
                    </div>
                )}
            </Index>
        </div>
    )
}

export default CorrectOrder