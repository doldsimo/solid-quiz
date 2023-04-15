import { Switch, createMemo, createSignal } from "solid-js";
import SingleChoice from "./SingleChoice/SingleChoice";
import { useQuizData } from "../../../context/quizState";
import MultipleChoice from "./MultipleChoice/MultipleChoice";
import CorrectOrder from "./CorrectOrder/CorrectOrder";

let counter = 0;
let oldQuestionType = "";

const QuizQuestion = () => {
  const { currentQuestion, currentPage } = useQuizData();

  const [helper, setHelper] = createSignal(true);

  // is triggered after helper() is changed. This Method changes the helper back, that Question type is mounted again
  createMemo(() => {
    helper();
    if (oldQuestionType == currentQuestion().questionType && counter === 1) {
      setHelper(true);
      counter = 0;
    }
  });

  // Two effects are needed when only same questionstype is used to trigger unmount method for saving results to
  // On every currentPage change this mehtod is fired wich is for unmount the Question type in the match method
  createMemo(() => {
    if (oldQuestionType == currentQuestion().questionType) {
      setHelper(false);
      counter++
    } else {
      counter = 0;
    }
    oldQuestionType = currentQuestion().questionType;
  });

  return (
    <div style={{ "margin-bottom": ".7em" }}>
      <Switch>
        <Match when={currentQuestion().questionType === "singlechoice"}>
          {helper() && <SingleChoice />}
        </Match>
        <Match when={currentQuestion().questionType === "multiplechoice"}>
          {helper() && <MultipleChoice />}
        </Match>
        <Match when={currentQuestion().questionType === "correctorder"}>
          {helper() && <CorrectOrder/>}
        </Match>
      </Switch>
    </div>
  )
}

export default QuizQuestion