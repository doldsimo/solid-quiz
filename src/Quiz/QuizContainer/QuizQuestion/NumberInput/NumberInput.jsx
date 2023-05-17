
import { createSignal, onCleanup, onMount } from 'solid-js';
import styles from './NumberInput.module.css';
import { Box, Heading, Input, InputGroup, InputLeftElement, Tag } from '@hope-ui/solid';
import { useQuizData } from '../../../../context/quizState';
import { OcNumber2 } from 'solid-icons/oc'

const NumberInput = () => {
    const { currentQuestion, allUserAnswers, currentPage, showQuizPoints } = useQuizData();
    const realPage = currentPage(); // helping variable for using onMount and onCleanup mehtod with correct page

    const [answerNumber, setAnswerNumber] = createSignal(null);

    const setAnswer = (e) => {
        setAnswerNumber(e.target.value);
    }

    onMount(() => {
        // console.log("SC mount");
        if (allUserAnswers()[realPage - 1] !== null) {
            setAnswerNumber(allUserAnswers()[realPage - 1]);
        }
    })

    onCleanup(() => {
        // console.log("SC unmount");
        allUserAnswers()[realPage - 1] = answerNumber();
    });

    return (
        <div>
            <Heading level="2" size="xl" my="$3">{currentQuestion().question}</Heading>
            {showQuizPoints() && <Tag colorScheme="warning">Max points: {currentQuestion().point}</Tag>}
            <Box class={styles.answerInputBox} w="100%" p="$4" borderRadius="$md">
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <OcNumber2 color="$neutral8" />
                    </InputLeftElement>
                    <Input class={styles.inputFied} type="number" value={answerNumber()} placeholder="Your answer (Number)" onChange={(e) => setAnswer(e)} />
                </InputGroup>

            </Box>
        </div>
    )
}

export default NumberInput