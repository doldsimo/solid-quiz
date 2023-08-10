<p align="center">
  <a href="https://www.npmjs.com/package/solid-quiz">
    <img
      alt="Solid quiz - Simple quiz component for solidjs and solid-start."
      src="https://raw.githubusercontent.com/doldsimo/solid-quiz/master/docs/imges/solid-quiz-title-preview.png">
  </a>
</p>

<br>

Allows you to add a simple quiz in solidjs. You can [create the content](#how-do-i-create-my-own-quizzes) by yourselve and use it in the quiz.

## Live demo

Try it out in the [live demo](https://doldsimo.github.io/solidjs-quiz/quiz).

## Installation
```sh
npm i solid-quiz
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
| quiz            | object   | Yes          | JSON Object for quiz data                                                                             |
| quizStartButton | String   | No           | String for showing text on start button on start page, default text is "Start Quiz"                                                           |
| config          | object   | No           | JSON Object for config (color, theme darkmode/lightmode)                                              |
| allowBackJump   | Boolean  | No           | allow backjumping to previous questions                                                               |
| showProgressBar | Boolean  | No           | can be enabled to show a quiz progress bar                                                            |
| showQuizPoints  | Boolean  | No           | can be enabled to show inside the quiz the max. points for every question                             |
| resultType      | String   | No           | decide how the result is displayed there are these options: ("none" \| "points" \| "feedback")        |
| onComplete      | func     | No           | Function which is executed after quiz is completed event e can be used with informations about result |

## Need Help?

If you have a problem with the library, [create a new issue](https://github.com/doldsimo/solid-quiz/issues/new).

## Github 
