/* @refresh reload */
import { render } from 'solid-js/web';

import { Quiz } from "./Quiz/Quiz";

const App = () => {
  const config = {
    initialColorMode: "light",
  }

  return (
    <Quiz config={config} allowBackJump={true} showProgressBar={true} />
  );
};

render(() => <App />, document.getElementById("root"));
