import { Box, Text } from "@hope-ui/solid"

import styles from "./NumberInputResult.module.css";
import { useQuizData } from "../../../../../../context/quizState";

const NumberInputResult = (props) => {
    const { allUserAnswers } = useQuizData();
    return (
        <div>
            <Box class={props.question.correctAnswer === allUserAnswers()[props.qIndex] ? styles.correctAnswer : styles.wrongAnswer}>
                <Text>{props.question.correctAnswer}</Text>
                {props.question.correctAnswer !== allUserAnswers()[props.qIndex] && <Text> &nbsp; | Your answer: {allUserAnswers()[props.qIndex]}</Text>}
            </Box>
        </div>
    )
}

export default NumberInputResult