import { Box, Checkbox, Heading, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../../context/quizState";
import { createSignal, onCleanup, onMount } from "solid-js";
import styles from "./MultipleChoice.module.css";

const MultipleChoice = () => {
    const { currentQuestion, allUserAnswers, currentPage } = useQuizData();
    const realPage = currentPage(); // herlping variable for using onMount and onCleanup mehtod with correct page

    const [checkedAnswers, setCheckedAnswers] = createSignal(Array.from({ length: currentQuestion().answers.length }, i => i = false));

    const setAnswer = (i) => {
        let newAnsArray = [...checkedAnswers()];
        newAnsArray[i] = !newAnsArray[i];
        setCheckedAnswers(newAnsArray);
    }


    onMount(() => {
        if (allUserAnswers()[realPage - 1] !== null) {
            setCheckedAnswers([...allUserAnswers()[realPage - 1]]);
        }
    });

    onCleanup(() => {
        // console.log("cleanup MC");
        allUserAnswers()[realPage - 1] = checkedAnswers();
        // console.log("new Answers: ", allUserAnswers());
    });

    return (
        <div>
            <Heading level="2" size="xl" my="$3">{currentQuestion().question}</Heading>
            <div>
                <Index each={currentQuestion().answers}>
                    {(answer, i) => (
                        <Box class={checkedAnswers()[i] === true ? `${styles.answerBox} ${styles.answerBoxActive}` : styles.answerBox} w="100%" p="$4" borderRadius="$md" onClick={() => setAnswer(i)}>
                            <Checkbox class={styles.radioButton} checked={checkedAnswers()[i]}><Text>{answer}</Text></Checkbox>
                        </Box>)}
                </Index>
            </div>
        </div>
    )
}

export default MultipleChoice;