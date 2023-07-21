/* @refresh reload */
import { render } from 'solid-js/web';

import Quiz from "./Quiz/Quiz";

import quiz_gap from "./examplequiz/quiz_gap.json";

const App = () => {
  const config = {
    initialColorMode: "light", // dark/light/system
    lightTheme: {
      colors: {
        // primary3: "#d7373c", // color for default answer boxes
        // success7: "blue", // color if button is marked as answer
        // primary4: "Black", // color for Buttons at bottom (Next/Back/Finish)
        // primary9: "Green", // Progress bar color
        // primary11: "Green", // Start/End Button Color
        // ...
      }
    },
    darkTheme: {
      colors: {
        // primary3: "#d7373c", // color for default answer boxes
        // success7: "blue", // color if button is marked as answer
        // primary4: "Black", // color for Buttons at bottom (Next/Back/Finish)
        // primary9: "Green", // Progress bar color
        // primary11: "Green", // Start/End Button Color
        // ...
      }
    },
  }

  return (
    <Quiz
      quiz={quiz_gap}
      quizTitle="SolidJS Quiz"
      config={config}
      allowBackJump={true}
      showProgressBar={true}
      showQuizPoints={true}
      resultType="feedback"
    //onComplete={(e) => console.log(e)}
    />
  );
};

render(() => <App />, document.getElementById("root"));
