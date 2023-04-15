/* @refresh reload */
import { render } from 'solid-js/web';

import { Quiz } from "./Quiz/Quiz";

const App = () => {
  return (
    <Quiz/>
  );
};

render(() => <App />, document.getElementById("root"));
