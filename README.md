# Solid Quiz

Simple quiz component for solid-js.  <br>
Allows you to add a simple quiz in solidjs. You can create the content and use it in the quiz. There are different quiz pens

## Installation
``` 
npm i solid-quiz
```

## Importing
``` 
import Quiz from "solid-quiz";
```

### Import styles
``` 
import "solid-quiz/dist/style.css";
```

## Usage
``` 
import { quiz } from './quiz.json';
 ...
<Quiz quiz={quiz}/>
```

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
| config          | object   | No           | JSON Object for config (color, theme darkmode/lightmode)                                              |
| allowBackJump   | Boolean  | No           | allow backjumping to previous questions                                                               |
| showProgressBar | Boolean  | No           | can be enabled to show a quiz progress bar                                                            |
| showQuizPoints  | Boolean  | No           | can be enabled to show inside the quiz the max. points for every question                             |
| resultType      | String   | No           | decide how the result is displayed there are these options: ("none" \| "points" \| "feedback")        |
| onComplete      | func     | No           | Function which is executed after quiz is completed event e can be used with informations about result |


## Result

## Github 
