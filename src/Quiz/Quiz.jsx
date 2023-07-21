import { QuizProvider } from "../context/quizState";
import QuizContainer from "./QuizContainer/QuizContainer";
import quiz from "../examplequiz/quiz.json";
import PropTypes from 'prop-types';

import lightColors from '../theme/lightColors';
import darkColors from '../theme/darkColors';
import { HopeProvider } from "@hope-ui/solid";

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
// quiz             | JSON Object for quiz data (required)
// config           | JSON Object for config (color, theme darkmode/lightmode)
// allowBackJump    | Boolean which allows Backjumping to previous Questions or not
// showProgressBar  | Boolean which can be enabled to show a quiz progress bar
// showQuizPoints   | Boolean which can be enabled to show inside the quiz the max. Points for every question
// resultType       | String which decide how the result is displayed there are these options: ("none" | "points" | "feedback")
// onComplete       | Function which is executed after quiz is completed event e can be used with informations about result

const Quiz = (props) => {
  return (
    <HopeProvider config={props.config !== undefined ? props.config : config}>
      <QuizProvider>
        <QuizContainer
          quiz={props.quiz !== undefined ? props.quiz : quiz}
          quizStartButton={props.quizStartButton === undefined ? null : props.quizStartButton}
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

// define PropTyes for autocomplete for Quiz component
Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  quizStartButton: PropTypes.string,
  config: PropTypes.object,
  allowBackJump: PropTypes.bool,
  showProgressBar: PropTypes.bool,
  showQuizPoints: PropTypes.bool,
  resultType: PropTypes.string,
  onComplete: PropTypes.func,
}

export default Quiz;