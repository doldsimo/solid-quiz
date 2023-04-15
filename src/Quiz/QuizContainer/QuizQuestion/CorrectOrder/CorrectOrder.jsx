import { Heading } from "@hope-ui/solid";
import { useQuizData } from "../../../../context/quizState";
import { createSignal, onCleanup, onMount } from "solid-js";

import SortableVerticalList from './SortableVerticalList';

const CorrectOrder = () => {
    const { currentQuestion, allUserAnswers, currentPage } = useQuizData();
    const realPage = currentPage(); // herlping variable for using onMount and onCleanup mehtod with correct page
    const [items, setItems] = createSignal(currentQuestion().answers);



    onMount(() => {
        if (allUserAnswers()[realPage - 1] !== null) {
            setItems([...allUserAnswers()[realPage - 1]]);
        }
    });

    onCleanup(() => {
        allUserAnswers()[realPage - 1] = items();
    });

    return (
        <div>
            <Heading level="2" size="xl" my="$3">{currentQuestion().question}</Heading>
            <div>
                <SortableVerticalList items={items()} setItems={setItems} />
            </div>
        </div>
    )
}

export default CorrectOrder