<p align="center">
  <a href="https://www.npmjs.com/package/solid-quiz">
    <img
      alt="Solid quiz - Simple quiz component for solidjs and solid-start."
      src="https://raw.githubusercontent.com/doldsimo/solid-quiz/master/docs/imges/solid-quiz-title-preview.png">
  </a>
</p>

<br>

- Build for [solidjs](https://www.solidjs.com/) and [solid-start](https://start.solidjs.com/getting-started/what-is-solidstart).
- Example apps which uses solid quiz:
  -  [solidjs](https://github.com/doldsimo/solidjs-quiz)
  -  [solid-start](https://github.com/doldsimo/solid-start-quiz-app)
- Allows you to add a simple quiz in solidjs. You can [create the content](#how-do-i-create-my-own-quizzes) by yourselve and use it in the quiz.

## Live demo

Try it out in the [live demo](https://doldsimo.github.io/solidjs-quiz/quiz).

## Installation
```sh
npm i solid-quiz
```
```sh
pnpm install solid-quiz
```

## Importing
```jsx
import Quiz from "solid-quiz";
```

## Usage
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json'; //your own quiz data in json format
 ...
<Quiz quiz={quiz}/>
```

## How do I create my own quizzes?

You can use the [simple quiz editor](https://doldsimo.github.io/solidjs-quiz/editor) or write the json quiz by hand in the correct format.

## Result


## Functions

- JSON based input
- styled Quiz
- dark/light mode
- quiz progress bar
- random question order
- Different question types (multiple choice, true/false, number input, fill in the blank, matching question)
- Event after quiz finished
- Points evaluation (extensive, only points, no evaluation
- allow back jump to questions
- show quiz points to user

## Props

| **Prop Name**   | **Type** | **Required** | **Description**                                                                                       |
|-----------------|----------|--------------|-------------------------------------------------------------------------------------------------------|
| quiz            | `Object` | Yes          | JSON Object for quiz data                                                                             |
| quizStartButton | `String` | No           | String for showing text on start button on start page, default text is "Start Quiz"                                                           |
| config          | `Object`  |No           | JSON Object for config (color, theme darkmode/lightmode)                                              |
| allowBackJump   | `Boolean` | No           | allow backjumping to previous questions                                                               |
| showProgressBar | `Boolean` | No           | can be enabled to show a quiz progress bar                                                            |
| showQuizPoints  | `Boolean` | No           | can be enabled to show inside the quiz the max. points for every question                             |
| resultType      | `String`  | No           | decide how the result is displayed there are these options: ("none" \| "points" \| "feedback")        |
| onComplete      | `func`    | No           | Function which is executed after quiz is completed event e can be used with informations about result |

## Functionality examples
> Examples how the probs above can be used inside the quiz. Of course all probs can be combined

### Start button with your own text
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';
 ...
<Quiz quiz={quiz} quizStartButton="Start solidjs quiz"/>
```

### With own visual config (for quiz in dark or lightmode) 
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';
const config = {
  initialColorMode: "light", // "dark" | "light" | "system"
  ...
}
 ...
<Quiz quiz={quiz} config={config}/>
```

### Allow backjumping to previus questions
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';
 ...
<Quiz quiz={quiz} allowBackJump/>
```

### Show progress bar
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';
 ...
<Quiz quiz={quiz} showProgressBar/>
```

### Show quiz points for every question inside the quiz
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';
 ...
<Quiz quiz={quiz} showQuizPoints/>
```

### Show the results after the quiz points

> There are three different result tyles: "none" \| "points" \| "feedback"
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';
 ...
<Quiz quiz={quiz} resultType="points"/>
```

### Callback function which is triggered after the quiz is finised

> This function can be used trigger everything you want to do after the quiz is finised.
```jsx
import Quiz from "solid-quiz";
import { quiz } from './quiz.json';

const resultFunction = (e) => {
  console.log(e); //Event with quiz results
  // Do what ever you want
}
 ...
<Quiz quiz={quiz} onComplete={resultFunction}/>
```

## Need Help?

If you have a problem with the library, [create a new issue](https://github.com/doldsimo/solid-quiz/issues/new).

## Github 
