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
> Try it out in the [live demo](https://doldsimo.github.io/solidjs-quiz/quiz).

![solid drag and drop preview](https://github.com/doldsimo/solid-quiz/blob/master/docs/imges/quiz-video.gif?raw=true)

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

The correct json format is given in the following:
> In this quiz is for every question type (multiplechoice, singlechoice, correctorder, numberinput, gaptext) an example given.

```jsx
const quiz = {
  "questions": [
    {
      "question": "SolidJS is a lightweight *** library for building web user interfaces. It emphasizes efficient rendering and strong typing to create fast, scalable ***. One of its key features is its use of a reactive programming model, which means that components automatically *** when their underlying data changes. SolidJS also includes a powerful *** syntax for creating templates and components, making it easy to build complex UIs. Additionally, it offers first-class support for TypeScript and integrates well with other popular libraries and frameworks. With its focus on *** and ease of use, SolidJS is a promising option for developers looking to build high-quality web applications.",
      "questionType": "gaptext",
      "correctAnswer": [
        "JavaScript",
        "applications",
        "re-render",
        "JSX-like",
        "performance"
      ],
      "point": "10"
    },
    {
      "question": "Who invented solidjs?",
      "questionType": "singlechoice",
      "answers": [
        "Ryan Carniato",
        "Linus Torvalds"
      ],
      "correctAnswer": "0",
      "point": "10"
    },
    {
      "question": "How many GitHub stars does the Solidjs repository have? (04/25/2023)",
      "questionType": "numberinput",
      "correctAnswer": "27000",
      "point": "10"
    },
    {
      "question": "Who invented solidjs?",
      "questionType": "singlechoice",
      "answers": [
        "Ryan Carniato",
        "Linus Torvalds"
      ],
      "correctAnswer": "0",
      "point": "10"
    },
    {
      "question": "Arrange the different frontend frameworks in descending order of their Github Stars.",
      "questionType": "correctorder",
      "answers": [
        "Solid",
        "Angular",
        "Vue",
        "React",
        "Svelte"
      ],
      "correctAnswer": [
        "React",
        "Vue",
        "Angular",
        "Svelte",
        "Solid"
      ],
      "point": "10"
    },
    {
      "question": "What are new JSX components that solidjs has out of the box compared to React?",
      "questionType": "multiplechoice",
      "answers": [
        "For",
        "Index",
        "All",
        "Switch",
        "Match"
      ],
      "correctAnswer": [
        true,
        true,
        false,
        true,
        true
      ],
      "point": "10"
    },
    {
      "question": "When was the first commit in the Solidjs repostory?",
      "questionType": "singlechoice",
      "answers": [
        "2020",
        "2016"
      ],
      "correctAnswer": "1",
      "point": "10"
    }
  ]
}
```

## Result


## Functions

- JSON based input
- styled Quiz
- dark/light mode
- quiz progress bar
- random question order
- Different question types (multiplechoice, singlechoice, correctorder, numberinput, gaptext)
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

### Show the results after the quiz is finished

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
