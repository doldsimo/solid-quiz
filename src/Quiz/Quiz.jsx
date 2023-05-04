import { QuizProvider } from "../context/quizState";
import QuizContainer from "./QuizContainer/QuizContainer";
import quiz from "../examplequiz/quiz.json";

import lightColors from '../theme/lightColors';
import darkColors from '../theme/darkColors';
import { HopeProvider, useColorMode } from "@hope-ui/solid";
import { createEffect, createMemo, createSignal } from "solid-js";

// Config for HopeUi
const config = {
  initialColorMode: "light",
  lightTheme: {
    colors: lightColors
  },
  darkTheme: {
    colors: darkColors
  },
}

// Props which can be configured on Quiz component:
// ----------------------------------------------------------------------------
// quiz             | JSON Object for quiz data
// config           | JSON Object for config (color, theme darkmode/lightmode)
// allowBackJump    | Boolean which allows Backjumping to previous Questions or not
// showProgressBar  | Boolean which can be enabled to show a quiz progress bar
// showQuizPoints   | Boolean which can be enabled to show inside the quiz the max. Points for every question
// resultType       | String which decide how the result is displayed there are these options: ("none" | "points" | "feedback")
// onComplete       | Function which is executed after quiz is completed event e can be used with informations about result

export const Quiz = (props) => {
  return (
    <HopeProvider config={props.config !== undefined ? props.config : config}>
      <QuizProvider>
        <QuizContainer
          quiz={props.quiz !== undefined ? props.quiz : quiz}
          allowBackJump={props.allowBackJump === undefined ? false : props.allowBackJump}
          showProgressBar={props.showProgressBar === undefined ? true : props.showProgressBar}
          showQuizPoints={props.showQuizPoints === undefined ? false : props.showQuizPoints}
          resultType={props.resultType === undefined ? "feedback" : props.resultType}
          onComplete={props.onComplete === undefined ? null : props.onComplete}

        />
      </QuizProvider>
    </HopeProvider>
  )
}