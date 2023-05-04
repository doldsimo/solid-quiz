import { For, Index } from "solid-js";
import { useQuizData } from "../../../../../../context/quizState";

import styles from "./GapTextResult.module.css";
import { Box, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Text } from "@hope-ui/solid";

const GapTextResult = (props) => {
    const { allUserAnswers } = useQuizData();

    const text = props.question.question;
    const regex = /\*\*\*/
    const parts = text.split(regex);

    return (
        <div>
            <Index each={parts}>
                {(part, i) => (
                    <>
                        <div>
                            {part}
                        </div>
                        {i < parts.length - 1 &&
                            <>
                                <Box class={props.question.correctAnswer[i] === allUserAnswers()[props.qIndex][i] ? styles.correctAnswer : styles.wrongAnswer}>
                                    <Text>{props.question.correctAnswer[i]}</Text>
                                    {props.question.correctAnswer[i] !== allUserAnswers()[props.qIndex][i] && <Text> &nbsp; | Your answer: {allUserAnswers()[props.qIndex][i]}</Text>}
                                </Box>
                            </>
                        }
                    </>
                )}
            </Index>
        </div>
    )
}

export default GapTextResult