import Quiz from "solid-quiz";

import quiz from "../test-quizes/quiz_gap.json"

// needed to import styles from the library
// import "solid-quiz/dist/style.css";

const App = () => {
  return (
    <>
      <h1>Inside Test-Project</h1>
      <Quiz quiz={quiz} allowBackJump={false} quizStartButton={"SolidJS Quiz"}/>
    </>
  );
};

export default App;
