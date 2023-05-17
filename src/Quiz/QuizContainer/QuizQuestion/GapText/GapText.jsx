import { Heading, Select, SelectContent, SelectIcon, SelectListbox, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTrigger, SelectValue, Tag, Text } from "@hope-ui/solid"
import { useQuizData } from "../../../../context/quizState";
import { Index, createSignal, onCleanup, onMount } from "solid-js";
import styles from "./GapText.module.css";
import { shuffle } from "../../../../helper/others";



const GapText = () => {
    const { currentQuestion, allUserAnswers, currentPage, showQuizPoints } = useQuizData();
    const realPage = currentPage(); // herlping variable for using onMount and onCleanup mehtod with correct page

    // Helping variables for adding after every *** a select field
    const text = currentQuestion().question;
    const regex = /\*\*\*/
    const parts = text.split(regex);

    const [gapAnswers, setGapAnswer] = createSignal(Array.from({ length: currentQuestion().correctAnswer.length }, i => i = "none"));

    const setAnswer = (text, i) => {
        let newAnsArray = [...gapAnswers()];
        newAnsArray[i] = text;
        setGapAnswer(newAnsArray);
    }

    onMount(() => {
        if (allUserAnswers()[realPage - 1] !== null) {
            setGapAnswer([...allUserAnswers()[realPage - 1]]);
        }
    });

    onCleanup(() => {
        // console.log("cleanup MC");
        allUserAnswers()[realPage - 1] = gapAnswers();
    });
    console.log(currentQuestion());
    return (
        <div>
            <Heading level="2" size="xl" my="$3">Fill in the gaps in the text below:</Heading>
            {showQuizPoints() && <Tag colorScheme="warning">Max points: {currentQuestion().point * currentQuestion().correctAnswer.length}</Tag>}
            <div>
                <Index each={parts}>
                    {(part, i) => (
                        <>
                            {part}
                            {/* After every part put a select item */}
                            {i < parts.length - 1 &&
                                <Select size="sm" variant="filled" onChange={(text) => setAnswer(text, i)} value={gapAnswers()[i]}>
                                    <SelectTrigger class={styles.select}>
                                        <SelectPlaceholder>Select answer</SelectPlaceholder>
                                        <SelectValue />
                                        <SelectIcon />
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectListbox>
                                            <For each={shuffle([...currentQuestion().correctAnswer])}>
                                                {item => (
                                                    <SelectOption value={item}>
                                                        <SelectOptionText>{item}</SelectOptionText>
                                                        <SelectOptionIndicator />
                                                    </SelectOption>
                                                )}
                                            </For>
                                        </SelectListbox>
                                    </SelectContent>
                                </Select>
                            }
                        </>
                    )}
                </Index>
            </div>
        </div>
    )
}

export default GapText