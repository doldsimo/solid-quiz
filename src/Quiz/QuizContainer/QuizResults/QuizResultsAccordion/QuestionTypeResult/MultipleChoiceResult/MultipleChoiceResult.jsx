import { Index } from "solid-js";
import { useQuizData } from "../../../../../../context/quizState";
import { Box, Checkbox, Text } from "@hope-ui/solid";
import styles from "./MultipleChoiceResults.module.css";

const MultipleChoiceResult = (props) => {
  const { allUserAnswers } = useQuizData();

  return (
    <div>
      <Index each={props.question.answers}>
        {(answer, i) => (
          <Box class={props.question.correctAnswer[i] ? styles.correctAnswer : styles.wrongAnswer} borderRadius="$md">
            <Checkbox disabled class={styles.checkBox} checked={allUserAnswers()[props.qIndex][i]}><Text>{answer}</Text></Checkbox>
          </Box>)}
      </Index>
    </div>
  )
}

export default MultipleChoiceResult;