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

export const Quiz = (props) => {

  return (
    <HopeProvider config={props.config !== undefined ? props.config : config}>
      <QuizProvider>
        <QuizContainer
          quiz={props.quiz !== undefined ? props.quiz : quiz}
          allowBackJump={props.allowBackJump !== undefined ? true : false}
          showProgressBar={props.showProgressBar !== undefined ? true : false}

        />
      </QuizProvider>
    </HopeProvider>
  )
}