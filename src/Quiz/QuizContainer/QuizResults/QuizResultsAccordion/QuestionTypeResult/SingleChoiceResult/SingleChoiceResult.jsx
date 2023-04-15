import { Box, Radio, Text } from "@hope-ui/solid"
import { Index } from "solid-js"
import styles from "./SingleChoiceResult.module.css";
import { useQuizData } from "../../../../../../context/quizState";

const SingleChoiceResult = (props) => {
    const { allUserAnswers } = useQuizData();
    return (
        <div>
            <Index each={props.question.answers}>
                {(answer, i) => (
                    <Box class={i === Number(props.question.correctAnswer) ? styles.correctAnswer : styles.wrongAnswer} borderRadius="$md">
                        <Radio defaultChecked={allUserAnswers()[props.qIndex] === i} class={styles.radioButton} disabled><Text>{answer}</Text></Radio>
                    </Box>)}
            </Index>
        </div>
    )
}

export default SingleChoiceResult