import { Switch } from "solid-js";
import { Text } from "@hope-ui/solid"
import { useQuizData } from "../../../context/quizState";

import MultiplechoiceTag from "./QuestionTypeTag/MultiplechoiceTag/MultiplechoiceTag";
import TrueFalseTag from "./QuestionTypeTag/TrueFalseTag/TrueFalseTag";
import CorrectOrderTag from "./QuestionTypeTag/CorrectOrderTag/CorrectOrderTag";
import DragAndDropTag from "./QuestionTypeTag/DragAndDropTag/DragAndDropTag";
import RelationTag from "./QuestionTypeTag/RelationTag/RelationTag";
import SingleChoiceTag from "./QuestionTypeTag/SingleChoiceTag/SingleChoiceTag";


const QuizHeader = () => {
    const { currentPage, currentQuestion } = useQuizData();

    return (
        <div>
            <Text>#{currentPage()}:</Text>

            <Switch>
                <Match when={currentQuestion().questionType === "singlechoice"}>
                    <SingleChoiceTag />
                </Match>
                <Match when={currentQuestion().questionType === "multiplechoice"}>
                    <MultiplechoiceTag />
                </Match>
                <Match when={currentQuestion().questionType === "truefalsequestion"}>
                    <TrueFalseTag />
                </Match>
                <Match when={currentQuestion().questionType === "correctorder"}>
                    <CorrectOrderTag />
                </Match>
                <Match when={currentQuestion().questionType === "draganddrop"}>
                    <DragAndDropTag />
                </Match>
                <Match when={currentQuestion().questionType === "relatonquestion"}>
                    <RelationTag />
                </Match>
            </Switch>
        </div>
    )
}

export default QuizHeader